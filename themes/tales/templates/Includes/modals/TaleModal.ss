<div id="taleModal" class="modal fade" role="dialog">
    <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">

            <%-- Modal Body --%>
            <div class="modal-body">
                <div class="close-button" data-dismiss="modal">$getCloseIcon</div>
                <%-- Tale Data --%>
                <div id="TaleContent">
                    <div class="current-tale">
                        <img v-bind:src="CurrentTale.ImageURL" class="img-responsive">
                        <h1 class="tale-title">{{ CurrentTale.Title }}</h1>
                            <span class="tale-content" v-html="CurrentTale.Content"></span>
                    </div>
                </div>
            </div>
            <%-- Modal Footer--%>
            <div class="modal-footer">
                <div class="close-modal" data-dismiss="modal">Close Tale</div>
            </div>

        </div>
    </div>
</div>