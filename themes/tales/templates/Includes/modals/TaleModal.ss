<div id="taleModal" class="modal fade" role="dialog">
    <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">

            <%-- Modal Body --%>
            <div class="modal-body">
                <div v-on:click="clearTale" class="close-button" data-dismiss="modal">$getCloseIcon</div>
                <%-- Tale Data --%>
                <div id="TaleContent">
                    <div class="current-tale">
                        <img v-if="CurrentTale.ImageURL" v-bind:src="CurrentTale.ImageURL" class="img-responsive">
                        <h1 class="tale-title">{{ CurrentTale.Title }} <span>
                            <% if $CurrentMember %>
                                <% loop $CurrentMember %>
                                    <span  v-on:click="fillTaleForm" data-toggle="modal" data-target="#taleFormModal">Edit</span>
                                    <%-- Include edit modal and populate with old Data --%>

                                <% end_loop %>

                            <% end_if %>

                        </span></h1>
                            <span class="tale-content" v-html="CurrentTale.Content"></span>
                    </div>
                </div>
            </div>
            <%-- Modal Footer--%>
            <div class="modal-footer">
                <div class="close-modal" v-on:click="clearTale" data-dismiss="modal">Close Tale</div>
            </div>

        </div>
    </div>
</div>