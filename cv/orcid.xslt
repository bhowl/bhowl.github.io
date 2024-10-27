<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:record="http://www.orcid.org/ns/record"
                xmlns:activities="http://www.orcid.org/ns/activities"
                xmlns:work="http://www.orcid.org/ns/work"
                xmlns:common="http://www.orcid.org/ns/common">
  <xsl:output method="html" encoding="UTF-8"/>
  
  <!-- Define the key for grouping by title -->
  <xsl:key name="work-by-title" match="work:work-summary" use="work:title/common:title"/>

  <xsl:template match="/">
    <html>
      <body>
        <h2>Publications</h2>
        <ul>
          <!-- Iterate through work summaries, using the key for grouping -->
          <xsl:for-each select="record:record/activities:activities-summary/activities:works/activities:group/work:work-summary[generate-id() = generate-id(key('work-by-title', work:title/common:title)[1])]">
            <li>
              <p>
                <strong><xsl:value-of select="work:title/common:title" /></strong><br/>
                <xsl:value-of select="common:publication-date/common:year" />.
                <xsl:value-of select="work:journal-title" />.
                <a href="https://{common:external-ids/common:external-id/common:external-id-type[1]}.org/{common:external-ids/common:external-id/common:external-id-value[1]}">paper</a>
              </p>
            </li>
          </xsl:for-each>
        </ul>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
