document.addEventListener("DOMContentLoaded", () => {
    const { jsPDF } = window.jspdf;

    function splitTextAndAddPage(doc, text, x, y, maxLineWidth, lineHeight) {
        let lines = doc.splitTextToSize(text, maxLineWidth);
        for (let i = 0; i < lines.length; i++) {
            if (y + lineHeight > doc.internal.pageSize.height - 20) {
                doc.addPage();
                y = 20;
            }
            doc.text(x, y, lines[i]);
            y += lineHeight;
        }
        return y;
    }

    window.generatePDF = function() {
        const fullName = document.getElementById('fullName').value;
        const address = document.getElementById('address').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const education = document.getElementById('education').value;
        const skills = document.getElementById('skills').value;
        const experience = document.getElementById('experience').value;
        const projects = document.getElementById('projects').value;
        const certificates = document.getElementById('certificates').value;
        const languages = document.getElementById('languages').value;
        const declaration = document.getElementById('declaration').value;

        const doc = new jsPDF();

        let x = 20;
        let y = 20;
        const maxLineWidth = 170;
        const lineHeight = 10;

        doc.setFontSize(18);
        doc.text(x, y, fullName);
        y += lineHeight;

        doc.setFontSize(12);
        y = splitTextAndAddPage(doc, `Address: ${address}`, x, y, maxLineWidth, lineHeight);
        y = splitTextAndAddPage(doc, `Phone: ${phone}`, x, y, maxLineWidth, lineHeight);
        y = splitTextAndAddPage(doc, `Email: ${email}`, x, y, maxLineWidth, lineHeight);

        doc.setFontSize(16);
        y += lineHeight;
        doc.text(x, y, "Education");
        y += lineHeight;

        doc.setFontSize(12);
        y = splitTextAndAddPage(doc, education, x, y, maxLineWidth, lineHeight);

        doc.setFontSize(16);
        y += lineHeight;
        doc.text(x, y, "Skills");
        y += lineHeight;

        doc.setFontSize(12);
        y = splitTextAndAddPage(doc, skills, x, y, maxLineWidth, lineHeight);

        doc.setFontSize(16);
        y += lineHeight;
        doc.text(x, y, "Experience");
        y += lineHeight;

        doc.setFontSize(12);
        y = splitTextAndAddPage(doc, experience, x, y, maxLineWidth, lineHeight);

        doc.setFontSize(16);
        y += lineHeight;
        doc.text(x, y, "Projects");
        y += lineHeight;

        doc.setFontSize(12);
        y = splitTextAndAddPage(doc, projects, x, y, maxLineWidth, lineHeight);

        doc.setFontSize(16);
        y += lineHeight;
        doc.text(x, y, "Certificates");
        y += lineHeight;

        doc.setFontSize(12);
        y = splitTextAndAddPage(doc, certificates, x, y, maxLineWidth, lineHeight);

        doc.setFontSize(16);
        y += lineHeight;
        doc.text(x, y, "Languages Known");
        y += lineHeight;

        doc.setFontSize(12);
        y = splitTextAndAddPage(doc, languages, x, y, maxLineWidth, lineHeight);

        doc.setFontSize(16);
        y += lineHeight;
        doc.text(x, y, "Declaration");
        y += lineHeight;

        doc.setFontSize(12);
        y = splitTextAndAddPage(doc, declaration, x, y, maxLineWidth, lineHeight);

        doc.save(`${fullName}_Resume.pdf`);
    }
});
