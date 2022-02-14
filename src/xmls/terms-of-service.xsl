<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <style>
            .terms_of_service_main {
            display: flex; flex-direction: column;justify-content:flex-start;margin-top: 40px;font-size:
            20px;color:#ececec;opacity: .8
            }

            .terms_of_service_terms {
            display: flex; flex-direction: column;justify-content:flex-start;
            }

            .terms_of_service_term {
            margin-bottom: 20px;
            }

            .terms_of_service_term_index {
            margin-right: 5px;
            }

            .terms_of_service_separator {
            border-bottom: 5px solid #b39d61;margin-top: 40px;margin-bottom: 55px;opacity: 1
            }

            .terms_of_service_definitions {
            display: flex; flex-direction: column;justify-content:flex-start;
            }

            .terms_of_service_definition_section_one {
            display: flex;flex-direction: row;
            }

            .terms_of_service_definition_section_two {
            display: flex;flex-direction: row;margin-bottom: 20px;
            }

            .terms_of_service_definition_index {
            margin-right: 5px;
            }

            .terms_of_service_contact_infos {
            display:flex;flex-direction:column;
            }

            .terms_of_service_contact_info_paragraph {
            margin-top: 30px;margin-bottom: 45px;
            }

            .terms_of_service_contact_info_entry{
            display: flex;flex-direction: row;
            }

            .terms_of_service_footer {
            color:#86734e;margin-top: 60px;
            }
        </style>
        <div class="terms_of_service_main">
            <div class="terms_of_service_terms">
                <xsl:for-each select="terms-of-service/terms/term">
                    <div class="terms_of_service_term">
                        <span class="terms_of_service_term_index">
                            <xsl:value-of select="index"/>
                        </span>
                        <xsl:value-of select="text"/>
                    </div>
                </xsl:for-each>
            </div>
            <div class="terms_of_service_separator"/>
            <xsl:for-each select="terms-of-service/definitions/definition">
                <div class="terms_of_service_definitions">
                    <div class="terms_of_service_definition_section_one">
                        <div class="terms_of_service_definition_index">
                            <xsl:value-of select="index"/>
                        </div>
                        <div>
                            <xsl:value-of select="title"/>
                        </div>
                    </div>
                    <xsl:for-each select="paragraphs/paragraph">
                        <div class="terms_of_service_definition_section_two">
                            <div>
                                <xsl:value-of select="text"/>
                            </div>
                        </div>
                    </xsl:for-each>
                </div>
            </xsl:for-each>
            <div class="terms_of_service_contact_infos">
                <div class="terms_of_service_contact_info_paragraph">
                    <xsl:value-of select="terms-of-service/contact-info/paragraph"/>
                </div>
                <xsl:for-each select="terms-of-service/contact-info/informations/entry">
                    <div class="terms_of_service_contact_info_entry">
                        <div>
                            <xsl:value-of select="current()"/>
                        </div>
                    </div>
                </xsl:for-each>
            </div>
            <div class="terms_of_service_footer">
                <xsl:value-of select="terms-of-service/footer"/>
            </div>
        </div>
    </xsl:template>
</xsl:stylesheet>