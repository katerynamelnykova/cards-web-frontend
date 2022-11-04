function setSetDescription() {
    let url = "http://localhost:3000/setdescription"

    $.getJSON(url, createSet)

    function createSet(json) {
        const sets = json.projects
        var c = 0

        function fillSets(cursor) {
            for (i = cursor; i < cursor + 3; i++) {
                var title = sets[i].name
                var description = sets[i].description
    
                $(`#card-title${i-cursor}`).html(title)
                $(`#card-description${i-cursor}`).html(description)
            }
        }
        
        fillSets(c);
        
        $("#next").on("click", function() {
            if (c <= sets.length-4)
            {
                c += 1
                fillSets(c)
            }
        })

        $("#prev").on("click", function() {
            if (c > 0)
            {
                c -= 1
                fillSets(c)
            }
        })
    }
}