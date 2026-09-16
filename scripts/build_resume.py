"""Build public/resume.pdf from the editable content in resume/resume.json."""

import argparse
import json
from pathlib import Path
from xml.sax.saxutils import escape

from reportlab.lib import colors
from reportlab.lib.enums import TA_RIGHT
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    HRFlowable,
    KeepTogether,
    PageBreak,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
BLUE = colors.HexColor("#245681")
GRAY = colors.HexColor("#595959")
# SimpleDocTemplate's frame adds 6 pt of padding inside each page margin.
WIDTH = letter[0] - 120


def register_fonts(font_dir):
    """Use Calibri when installed; accept a font directory for other machines."""
    candidates = [Path(font_dir)] if font_dir else [
        Path("/Library/Fonts/Microsoft"),
        Path("/Applications/Microsoft Word.app/Contents/Resources/DFonts"),
        Path("C:/Windows/Fonts"),
    ]
    for directory in candidates:
        if not directory.is_dir():
            continue
        files = {p.name.lower(): p for p in directory.iterdir()}
        regular = files.get("calibri.ttf")
        bold = files.get("calibri bold.ttf") or files.get("calibrib.ttf")
        if regular and bold:
            pdfmetrics.registerFont(TTFont("Resume", str(regular)))
            pdfmetrics.registerFont(TTFont("Resume-Bold", str(bold)))
            pdfmetrics.registerFontFamily("Resume", normal="Resume", bold="Resume-Bold")
            return "Resume", "Resume-Bold"
    raise SystemExit("Calibri fonts not found. Pass --font-dir with Calibri.ttf and Calibri Bold.ttf (or calibrib.ttf).")


def build(output, font_dir=None):
    data = json.loads((ROOT / "resume/resume.json").read_text())
    regular, bold = register_fonts(font_dir)
    body = ParagraphStyle(
        "Body", fontName=regular, fontSize=10, leading=12.6,
        textColor=colors.black, uriWasteReduce=0,
    )
    name = ParagraphStyle("Name", parent=body, fontName=bold, fontSize=21, leading=25, textColor=BLUE)
    tagline = ParagraphStyle("Tagline", parent=body, fontSize=11, leading=15, textColor=GRAY)
    section = ParagraphStyle("Section", parent=body, fontName=bold, fontSize=11.5, leading=14, textColor=BLUE)
    title = ParagraphStyle("Title", parent=body, fontName=bold, fontSize=10.5, leading=13)
    date = ParagraphStyle("Date", parent=body, fontSize=9.5, leading=13, textColor=GRAY, alignment=TA_RIGHT)
    organization = ParagraphStyle("Organization", parent=body, textColor=colors.HexColor("#333333"), leading=13)
    bullet = ParagraphStyle("Bullet", parent=body, leftIndent=25, firstLineIndent=0, bulletIndent=12, bulletFontName=regular, bulletFontSize=10, spaceAfter=3)
    story = []

    def linked(text):
        return text.replace('<a href=', '<a color="#006dcc" underline="1" href=')

    def bullets(items):
        return [Paragraph(linked(item), bullet, bulletText="•") for item in items]

    def heading(text, first=False):
        if not first:
            story.append(Spacer(1, 12))
        story.append(KeepTogether([
            Paragraph(escape(text), section),
            Spacer(1, 4),
            HRFlowable(width="100%", thickness=0.65, color=BLUE),
            Spacer(1, 7),
        ]))

    def entry(item):
        if item.get("new_page"):
            story.append(PageBreak())
            heading("PROFESSIONAL EXPERIENCE (CONTINUED)", first=True)
        date_width = 157
        row = Table(
            [[Paragraph(escape(item["title"]), title), Paragraph(escape(item["dates"]), date)]],
            colWidths=[WIDTH - date_width, date_width],
        )
        row.setStyle(TableStyle([
            ("LEFTPADDING", (0, 0), (-1, -1), 0),
            ("RIGHTPADDING", (0, 0), (-1, -1), 0),
            ("TOPPADDING", (0, 0), (-1, -1), 0),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
            ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ]))
        block = [row, Paragraph(escape(item["organization"]), organization)]
        if item.get("division"):
            block.append(Paragraph(escape(item["division"]), organization))
        if item["bullets"]:
            block.append(Spacer(1, 4))
            block.extend(bullets(item["bullets"]))
        block.append(Spacer(1, 8))
        story.append(KeepTogether(block))

    story.extend([Paragraph(escape(data["name"]), name), Spacer(1, 2), Paragraph(escape(data["tagline"]), tagline), Spacer(1, 3)])
    links = ' &nbsp; <font color="#999999">•</font> &nbsp; '.join(
        f'<a href="{escape(link["url"])}">{escape(link["label"])}</a>' for link in data["links"]
    )
    story.append(Paragraph(linked(links), body))
    heading("PROFESSIONAL SUMMARY")
    story.append(Paragraph(escape(data["summary"]), body))
    heading("AREAS OF EXPERTISE")
    story.extend(bullets(data["expertise"]))
    heading("PROFESSIONAL EXPERIENCE")
    for item in data["experience"]:
        entry(item)
    heading("EDUCATION")
    for item in data["education"]:
        entry(item)
    heading("ACTIVITIES & RECOGNITION")
    story.extend(bullets(data["activities"]))

    output.parent.mkdir(parents=True, exist_ok=True)
    doc = SimpleDocTemplate(
        str(output), pagesize=letter, rightMargin=54, leftMargin=54,
        topMargin=54, bottomMargin=54,
        title="Nick Hand - Resume", author="Nick Hand",
        subject="Professional experience, education, and expertise",
    )
    doc.build(story)
    print(f"Built {output}")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--output", type=Path, default=ROOT / "public/resume.pdf")
    parser.add_argument("--font-dir", help="Directory containing Calibri regular and bold fonts")
    args = parser.parse_args()
    build(args.output, args.font_dir)
