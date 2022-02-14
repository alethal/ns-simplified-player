<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <style>
            .custodian-description {
            margin-top: 40px;margin-bottom: 40px;font-size: 20px; color: #fff;text-align: center;
            }

            .custodian-original-records {
            font-size: 20px; color: #fff;text-align: center;
            }

            .custodian-top-spacing {
            margin-top: 40px;
            }

            .custodian-authorized {
            font-size: 20px; color: #fff;text-align: center;
            }

            .custodian-statement {
            font-size: 20px; color: #fff;text-align: center;
            }

            .custodian-statement-title {
            text-transform: uppercase;
            }
        </style>
        <div class="custodian-description">
            <xsl:value-of select="custodian-of-records/description" />
        </div>
        <xsl:for-each select="custodian-of-records/original-records">
            <div class="custodian-original-records">
              <xsl:value-of select="text" />
            </div>
        </xsl:for-each>
        <div class="custodian-top-spacing">
            <xsl:for-each select="custodian-of-records/authorized">
                <div class="custodian-authorized">
                    <div>
                        <xsl:value-of select="name" />
                    </div>
                    <div>
                        <xsl:value-of select="address" />
                    </div>
                    <div>
                        <xsl:value-of select="county" />
                    </div>
                </div>
            </xsl:for-each>
        </div>
        <div class="custodian-top-spacing">
            <xsl:for-each select="custodian-of-records/statement">
                <div class="custodian-statement">
                    <div class="custodian-statement-title">
                        <xsl:value-of select="title" />
                    </div>
                    <div>
                        <xsl:value-of select="text" />
                    </div>
                </div>
            </xsl:for-each>
        </div>
    </xsl:template>
</xsl:stylesheet>
