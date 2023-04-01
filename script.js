const pdf = pdfjsLib;

let loadpdf = pdf.getDocument("pdf.pdf");
loadpdf.promise.then(function() {
    // do stuff here
})