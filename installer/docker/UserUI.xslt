<?xml version="1.0"?>

<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:frmwrk="Corel Framework Data"
                exclude-result-prefixes="frmwrk">
  <xsl:output method="xml" encoding="UTF-8" indent="yes"/>

  <!-- Use these elements for the framework to move the container from the app config file to the user config file -->
  <frmwrk:uiconfig>
    <frmwrk:compositeNode xPath="/uiConfig/commandBars/commandBarData[@guid='3eaa9bbe-28fd-4672-9128-02974ee96332']"/>
    <frmwrk:compositeNode xPath="/uiConfig/frame"/>
  </frmwrk:uiconfig>

  <!-- Copy everything -->
  <xsl:template match="node()|@*">
    <xsl:copy>
      <xsl:apply-templates select="node()|@*"/>
    </xsl:copy>
  </xsl:template>

  <!-- Puts the new command at the end of the 'dockers' menu -->
  <xsl:template match="commandBarData[@guid='3eaa9bbe-28fd-4672-9128-02974ee96332']/menu">
    <xsl:copy>
      <xsl:apply-templates select="node()|@*"/>
      <item guidRef="d09531f5-7cd1-459c-b805-936dfdf3567f"/>
    </xsl:copy>
  </xsl:template>

  <!-- Add the docker to the application -->
  <xsl:template match="dockSheet[@guidRef='6884106d-f37e-4712-986d-b2fe7e31ecdf']">
    <xsl:copy>
      <xsl:apply-templates select="node()|@*"/>
      <xsl:if test="not(./item[@guidRef='811e5f49-43a3-42a9-8059-1f1e2c46619f'])">
        <item guidRef="811e5f49-43a3-42a9-8059-1f1e2c46619f"/>
      </xsl:if>
    </xsl:copy>
  </xsl:template>

</xsl:stylesheet>
