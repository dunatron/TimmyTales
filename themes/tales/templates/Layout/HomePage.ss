<div class="row tales-row">
    <div class="tales-container">
        <% loop $getAllTales %>
            <% with $CoverImage.Fit(300,300) %>
                <div class="tale-panel" v-on:click="onTaleClick($Up.Up.ID)" data-toggle="modal" data-target="#taleModal" style="background-image: url($Url)">
                    <h1 class="tale-title">$Up.Up.Title</h1>
                </div>
            <% end_with %>
        <% end_loop %>
    </div>
    <div class="scroll-left not-visible"></div>
    <div class="scroll-right"></div>
</div>

<% include TaleModal %>