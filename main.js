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






// function loadXMLDoc(filename)
// {
// 	if (window.ActiveXObject)
// 	{
// 		xhttp = new ActiveXObject("Msxml2.XMLHTTP");
// 	}
// 	else
// 	{
// 		xhttp = new XMLHttpRequest();
// 	}
// 	xhttp.open("GET", filename, false);
// 	try {xhttp.responseType = "msxml-document"} catch(err) {} // Helping IE11
// 	xhttp.send("");
// 	return xhttp.responseXML;
// }

// function displayResult()
// {
// 	xml = loadXMLDoc("orcid.xml");
// 	xsl = loadXMLDoc("pub.xslt");
// 	// code for IE
// 	if (window.ActiveXObject || xhttp.responseType == "msxml-document")
// 	{
// 		ex = xml.transformNode(xsl);
// 		document.getElementById("publication").innerHTML = ex;
// 	}
// 	// code for Chrome, Firefox, Opera, etc.
// 	else if (document.implementation && document.implementation.createDocument)
// 	{
// 		xsltProcessor = new XSLTProcessor();
// 		xsltProcessor.importStylesheet(xsl);
// 		resultDocument = xsltProcessor.transformToFragment(xml, document);
// 		document.getElementById("publication").appendChild(resultDocument);
// 	}
// }
// displayResult








// // Define the namespace resolver function
// const nsResolver = (prefix) => {
//     const namespaces = {
//         'record': 'http://www.orcid.org/ns/record',
//         'activities': 'http://www.orcid.org/ns/activities',
//         'work': 'http://www.orcid.org/ns/work'
//     };
//     return namespaces[prefix] || null;
// };

// function createPubSection(node) {
//     // Create a new <div> for a single publication
//     var pubSection = document.createElement("div");
//     pubSection.setAttribute("class", "Publication");

//     // Check if the node has a text child node (if it's not a text node, find the text content)
//     var pubTitle = node.textContent.trim(); // Safely get the text content

//     if (pubTitle) {
//         var pubStr = document.createTextNode(pubTitle);
//         pubSection.appendChild(pubStr);
//     } else {
//         console.error("No text content found for the node.");
//     }

//     return pubSection;
// }

// function createPubElement() {
//     // Get references to the data island (XML data) and process it
//     loadXMLDoc("cv/orcid.xml").then((xmlData) => {
//         var expr = "/*[local-name()='record' and namespace-uri()='http://www.orcid.org/ns/record']" +
//         "/*[local-name()='activities-summary']" +
//         "/*[local-name()='works']" +
//         "/*[local-name()='group']" +
//         "/*[local-name()='work-summary' and namespace-uri()='http://www.orcid.org/ns/work']" +
//         "/*[local-name()='title']";

//         // Use XPath to get publication titles
//         var result = document.evaluate(
//             expr,
//             xmlData,
//             null,
//             XPathResult.ANY_TYPE
//         );

//         var node = result.iterateNext();
//         while (node) {
//             // Create a new <div> for the whole publication entry
//             var newDiv = document.createElement("div");
//             newDiv.setAttribute("class", "Publication");

//             // Now create a <div> for the publication section and append it
//             var newPub = createPubSection(node);
//             newDiv.appendChild(newPub);

//             // Add the new <div> containing the publication info to the web page
//             document.getElementById("publication").appendChild(newDiv);

//             // Get the next element in the result set
//             node = result.iterateNext();
//         }
//     });
// }

// window.addEventListener("load", function () {
//     document.getElementById("loadPublications").addEventListener("click", createPubElement);
// });

// var Publication;
// function showPublication() {
//     if (!Publication) {
//         alert("Publication data not loaded yet.");
//         return;
//     }

// 	let titleexpr = "/*[local-name()='record' and namespace-uri()='http://www.orcid.org/ns/record']" +
//         "/*[local-name()='activities-summary']" +
//         "/*[local-name()='works']" +
//         "/*[local-name()='group']" +
//         "/*[local-name()='work-summary' and namespace-uri()='http://www.orcid.org/ns/work']" +
//         "/*[local-name()='title']";
//     let result = document.evaluate(titleexpr, Publication, null, XPathResult.ANY_TYPE);
//     let node = result.iterateNext();
//     let title = node ? node.textContent : "No publication found";

//     alert("Publication: " + title);
// }

// window.addEventListener("load", (evt) => {
//     loadXMLDoc("cv/2024_10_20_orcid.xml").then(xml => Publication = xml);

//     document.getElementById("createArticle").addEventListener("click", () => {
//         showPublication();
//     });
// });

// function xmlhttprequest() {
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       document.getElementById("demo").innerHTML =
//       this.responseText;
//     }
//   };
//   xhttp.open("GET", "TODO.txt", true);
//   xhttp.send();
// }
