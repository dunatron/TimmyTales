<nav class="navbar navbar-default navbar-fixed-top tales-nav">
    <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                    data-target="#TimmyTalesNav" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="$AbsoluteBaseURL">$getTimmySVGIcon <span>Timmy Tales</span></a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="TimmyTalesNav">
            <ul class="nav navbar-nav">
                <% loop Menu(1) %>
                    <li><a href="$Link" class="$LinkingMode">$Title</a></li>
                <% end_loop %>
                <li role="presentation" class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true"
                       aria-expanded="false">
                        Tales List <span class="caret"></span>
                    </a>
                    <ul class="dropdown-menu">
                        <li v-for="tale in tales.items">
                            <a v-bind:href="tale.ID">{{ tale.Title }}</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
</nav>