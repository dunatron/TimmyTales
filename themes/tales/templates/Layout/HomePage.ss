<div class="row tales-row">
    <div class="tales-container">
        <% loop $getAllTales %>
            <% with $CoverImage.FocusFill(600,400) %>
                <div class="tale-panel"  style="background-image: url($Url);
                        background-position: $PercentageX% $PercentageY%;
                        background-size: cover;">
                    <h1 class="tale-title" v-on:click="onTaleClick($Up.Up.ID)" data-toggle="modal" data-target="#taleModal">$Up.Up.Title</h1>
                </div>
            <% end_with %>
        <% end_loop %>
    </div>
    <div class="scroll-left not-visible"></div>
    <div class="scroll-right"></div>
</div>

<% include TaleModal %>