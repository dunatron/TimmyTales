<div id="taleModal" class="modal fade" role="dialog">
    <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
            <%-- Modal Header --%>
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">
                    <div class="close-button" data-dismiss="modal"></div>
                </button>
            </div>
            <%-- Modal Body --%>
            <div class="modal-body">
                <%-- Tale Data --%>
                <div id="TaleContent">
                    <div class="current">
                        <h1>{{ CurrentTale.Title }}</h1>
                        <div class="content">
                            {{ CurrentTale.Content }}
                        </div>
                        <img v-bind:src="CurrentTale.ImageURL" class="img-responsive">
                    </div>
                </div>
            </div>
            <%-- Modal Footer--%>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>

        </div>
    </div>
</div>