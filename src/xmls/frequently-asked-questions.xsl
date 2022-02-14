<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <style>
            .faq-main {
            display: flex; flex-direction: column;justify-content:flex-start;font-size: 20px;
            }

            .faq-inner {
            display: flex; flex-direction: column;justify-content:flex-start;
            }

            .faq-text {
            color: #cccccc;
            font-weight:bold;
            }

            .faq-answer {
            color: #fff;margin-bottom: 20px;
            }
        </style>
        <div class="faq-main">
            <div class="faq-inner">
                <xsl:for-each select="frequently-asked-questions/question">
                    <div class="faq-text">
                        <xsl:value-of select="text"/>
                    </div>
                    <div class="faq-answer">
                        <xsl:value-of select="answer"/>
                    </div>
                </xsl:for-each>
            </div>
        </div>
    </xsl:template>
</xsl:stylesheet>