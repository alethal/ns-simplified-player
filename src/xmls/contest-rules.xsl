<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <style>
            .content-rules-main {
            display: flex; flex-direction: column;justify-content:flex-start;margin-top: 40px;
            }

            .content-rules-title {
            font-weight:bold;color:#fff;text-transform:uppercase;font-size: 40px;
            }

            .content-rules-subtitle {
            margin-bottom: 50px;color:#b39d61;text-transform:uppercase;font-weight:bold;font-size: 30px;
            }

            .content-rules-rules {
            display: flex; flex-direction: column;justify-content:flex-start;
            }

            .content-rules-rule {
            display: flex;flex-direction: row;color: #fff;margin-bottom: 10px;opacity: .7
            }

            .content-rules-rule-index {
            margin-right: 5px;
            }
        </style>
        <div class="content-rules-main">
            <div class="content-rules-title">
                <xsl:value-of select="contest/title"/>
            </div>
            <div class="content-rules-subtitle">
                <xsl:value-of select="contest/subtitle"/>
            </div>
            <div class="content-rules-rules">
                <xsl:for-each select="contest/contest-rules/rule">
                    <div class="content-rules-rule">
                        <div class="content-rules-rule-index">
                            <xsl:value-of select="index"/>
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