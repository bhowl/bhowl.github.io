async function loadXMLDoc(docURL) {
	const doc = await fetch(docURL);
	const response = await doc.text();
	const xml = new DOMParser().parseFromString(response, "text/xml");
	return xml;
}

async function loadXSLTDoc(xsltURL) {
	const xslt = await fetch(xsltURL);
	const response = await xslt.text();
	const xsltDoc = new DOMParser().parseFromString(response, "application/xml");
	return xsltDoc;
}

async function applyXSLTTransformation(xmlFile, xsltFile, outputElementId) {
	const xmlData = await loadXMLDoc(xmlFile);
	const xsltData = await loadXSLTDoc(xsltFile);

	// Create an XSLTProcessor and import the XSLT stylesheet
	const xsltProcessor = new XSLTProcessor();
	xsltProcessor.importStylesheet(xsltData);

	// Apply the XSL transformation to the XML data
	const transformedDoc = xsltProcessor.transformToFragment(xmlData, document);

	// Insert the transformed HTML into the specified element
	document.getElementById(outputElementId).appendChild(transformedDoc);
}

// Call this function to apply the transformation
applyXSLTTransformation("logo/logo.xml", "logo/logo.xslt", "logo");
applyXSLTTransformation("navbar/navbar.xml", "navbar/navbar.xslt", "navbar");


