<div id="taleFormModal" class="modal fade" role="dialog" ref="vuemodal">
    <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">

            <%-- Modal Body --%>
            <div class="modal-body">
                <div class="close-button" data-dismiss="modal">$getCloseIcon</div>
                $TaleForm
            </div>
            <%-- Modal Footer--%>
            <div class="modal-footer">
                <div class="close-modal" data-dismiss="modal" v-on:click="clearTaleForm">Close Tale</div>
            </div>

        </div>
    </div>
</div>