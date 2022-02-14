<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <style>
            .privacy-policy-main {
            display: flex; flex-direction: column;justify-content:flex-start;margin-top: 40px;font-size: 20px;
            }

            .privacy-policy-inner {
            display: flex; flex-direction: column;justify-content:flex-start;
            }

            .privacy-policy-item {
            display: flex;flex-direction: column;color: #fff;margin-bottom: 20px;opacity: .85
            }

            .privacy-policy-item-title {
            text-transform: uppercase;margin-bottom: 20px;color: #ffffff;font-weight: bold;
            }
        </style>
        <div class="privacy-policy-main">
            <div class="privacy-policy-inner">
                <xsl:for-each select="privacy-policy/privacies/privacy">
                    <div class="privacy-policy-item">
                        <div class="privacy-policy-item-title">
                            <xsl:value-of select="title"/>
                        </div>
                        <div>
                            <xsl:value-of select="text"/>
                        </div>
                    </div>
                </xsl:for-each>
            </div>
        </div>
    </xsl:template>
</xsl:stylesheet>