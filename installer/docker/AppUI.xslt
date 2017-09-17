<?xml version="1.0"?>
<!--
  d09531f5-7cd1-459c-b805-936dfdf3567f
  9c73db0b-4f71-4acd-80c4-c0b15aa3a930
  811e5f49-43a3-42a9-8059-1f1e2c46619f
-->
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:frmwrk="Corel Framework Data">
  <xsl:output method="xml" encoding="UTF-8" indent="yes"/>

  <frmwrk:uiconfig>
    <frmwrk:applicationInfo userConfiguration="true" />
  </frmwrk:uiconfig>

  <xsl:template match="node()|@*">
    <xsl:copy>
      <xsl:apply-templates select="node()|@*"/>
    </xsl:copy>
  </xsl:template>

  <xsl:template match="uiConfig/items">
    <xsl:copy>
      <xsl:apply-templates select="node()|@*"/>

      <!-- Define the button which shows the docker -->
      <itemData guid="d09531f5-7cd1-459c-b805-936dfdf3567f"
                noBmpOnMenu="true"
                type="checkButton"
                check="*Docker('811e5f49-43a3-42a9-8059-1f1e2c46619f')"
                dynamicCategory="2cc24a3e-fe24-4708-9a74-9c75406eebcd"
                userCaption="CdrPreflight"
                enable="true"/>

      <!-- Define the web control which will be placed on our docker -->
      <itemData guid="9c73db0b-4f71-4acd-80c4-c0b15aa3a930"
                type="browser"
                href="[VGAppAddonsDir]/CdrPreflightDocker/docker.html"
                enable="true"/>
    </xsl:copy>
  </xsl:template>

  <xsl:template match="uiConfig/dockers">
    <xsl:copy>
      <xsl:apply-templates select="node()|@*"/>

      <!-- Define the web docker -->
      <dockerData guid="811e5f49-43a3-42a9-8059-1f1e2c46619f"
                  userCaption="CdrPreflight"
                  wantReturn="true"
                  focusStyle="noThrow">
        <container>
          <!-- add the webpage control to the docker -->
          <item dock="fill" margin="0,0,0,0" guidRef="9c73db0b-4f71-4acd-80c4-c0b15aa3a930"/>
        </container>
      </dockerData>
    </xsl:copy>
  </xsl:template>

</xsl:stylesheet>
