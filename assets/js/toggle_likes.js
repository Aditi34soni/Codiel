const { $__insertMany } = require("mongoose/lib/model");

class ToggleLike{
    constructor(toggleElement){
        this.toggler = toggleElement;
        this.toggleLike();
    }
    toggleLike(){
        $(this.toggle).click(function(e){
            e.preventDefault();
            let self =this;
            $.ajax({
                type:'POST',
                url:$(self).attr('href'),
            })
            .done(function(data){
                let likesCount = parseInt($(self).attr('data-link'));
                console.log(likesCount);
                if(data.data.deleted == true){
                    likeCount -= 1;
                }else{
                    likeCount += 1;
                }
                
                $(self).attr('data-likes',LikesCount);
                $(self).html(`${likesCount} Likes`);
            })
            .fail(function(errData){
                console.log('error in completing the request');
            });
        });
    }
}