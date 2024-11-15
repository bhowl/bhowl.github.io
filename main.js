async function loadXMLDoc(docURL) {
    let doc = await fetch(docURL);
    let response = await doc.text();
    let xml = new DOMParser().parseFromString(response, "application/xml");
    return xml;
}

async function loadXSLTDoc(xsltURL) {
    let xslt = await fetch(xsltURL);
    let response = await xslt.text();
    let xsltDoc = new DOMParser().parseFromString(response, "application/xml");
    return xsltDoc;
}

async function applyXSLTTransformation(xmlFile, xsltFile, outputElementId) {
    let xmlData = await loadXMLDoc(xmlFile);
    let xsltData = await loadXSLTDoc(xsltFile);

    // Create an XSLTProcessor and import the XSLT stylesheet
    let xsltProcessor = new XSLTProcessor();
    xsltProcessor.importStylesheet(xsltData);

    // Apply the XSL transformation to the XML data
    let transformedDoc = xsltProcessor.transformToFragment(xmlData, document);

    // Insert the transformed HTML into the specified element
    document.getElementById(outputElementId).appendChild(transformedDoc);
}

// Call this function to apply the transformation
applyXSLTTransformation("shared/logo.xml", "shared/logo.xslt", "logo");
applyXSLTTransformation("cv/orcid.xml", "cv/orcid.xslt", "publication");
applyXSLTTransformation("shared/navbar.xml", "shared/navbar.xslt", "navbar");
