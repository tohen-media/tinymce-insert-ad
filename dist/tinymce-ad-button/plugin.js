!function(){"use strict";tinymce.PluginManager.add("tinymce-insert-ad",function(u){u.ui.registry.addButton("tinymce-insert-ad",{text:"Insert ad",onAction:function(){u.windowManager.open({title:"Insert Ad-unit",body:{type:"panel",items:[{type:"htmlpanel",html:'\n                        <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">\n                            <select id="ad_unit_code_select">\n                                <option value="">none</option>\n                            </select>\n\n                            <input \n                                type="text" \n                                placeholder="ad-unit code"\n                                id="ad_unit_code_input"\n                                value=""\n                            />\n                        </div>\n\n                        <div style="display: flex; justify-content: space-between;">\n                            <select id="ad_unit_sizes_select">\n                                <option value="">none</option>\n                            </select>\n\n                            <input \n                                type="text" \n                                placeholder="ad-size"\n                                id="ad_unit_size_input"\n                                value=""\n                            />\n                        </div>\n                    '}]},onSubmit:function(){var e=document.getElementById("ad_unit_code_input"),n=document.getElementById("ad_unit_size_input"),t="";e.value&&(t=n.value?"{{"+e.value+"|"+n.value+"}}":"{{"+e.value+"}}",u.insertContent(t),u.windowManager.close())},onCancel:function(){},buttons:[{type:"submit",text:"OK"},{type:"cancel",text:"Cancel"}]});var e=document.getElementById("ad_unit_code_input"),t=document.getElementById("ad_unit_code_select"),n=u.getParam("adsCodes"),i=document.getElementById("ad_unit_size_input"),a=document.getElementById("ad_unit_sizes_select"),d=u.getParam("adSizes");t.addEventListener("change",function(){e.value=t.value}),a.addEventListener("change",function(){i.value=a.value}),n&&n.forEach(function(e){var n=document.createElement("option");n.text=e.name,n.value=e.code,t.add(n)}),d&&d.forEach(function(e){var n=document.createElement("option");n.text=e+"x"+e,n.value=e+"x"+e,a.add(n)})}})})}();