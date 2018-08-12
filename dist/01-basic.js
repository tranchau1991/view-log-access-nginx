Vue.config.debug = true;
Vue.config.devtools = true;

new Vue({
    el: '#app',
    components: {
        VueBootstrapTable: VueBootstrapTable
    },
    data: {
        logging: [],
        showFilter: true,
        showPicker: true,
        paginated: true,
        multiColumnSortable: true,
        ajax: {
            enabled: true,
            url: "http://localhost/test/logs/data",
            method: "GET",
            delegate: false,
        },
        columns: [
            {
                title:"remote_addr",
                name:"0",
                visible: true,
                editable: false,
            },
            
			{
                title:"remote_user ",
                name: "1",
                visible: true,
                editable: false,
            },
            {
                title:"time_local",
                name: "2",
                visible: true,
                editable: false,
            },
			
            {
                title:"request",
                name: "3",
                visible: true,
                editable: false,
            }
			,
            {title:"status ",name: "4",visible: true,editable: false},
            {title:"body_bytes_sent ",name: "5",visible: true,editable: false},
            {title:"http_referer",name: "6",visible: true,editable: false},
            {title:"http_user_agent",name: "7",visible: true,editable: false},

        ],
        values: [
			
            {
                0: 1,
                1: "John",
                2: "UK",
                3: 25,
            },
            {
                0: 2,
                1: "Mary",
                2: "France",
                3: 30,
            }
			
        ]
    },
    created: function () {
        var self = this;
        this.$on('cellDataModifiedEvent',
            function( originalValue, newValue, columnTitle, entry) {
                self.logging.push("cellDataModifiedEvent - Original Value : " + originalValue +
                                         " | New Value : " + newValue +
                                         " | Column : " + columnTitle +
                                         " | Complete Entry : " +  entry );
            }
        );
        this.$on('ajaxLoadedEvent',
            function( data ) {
                this.logging.push("ajaxLoadedEvent - data : " + data );
            }
        );
        this.$on('ajaxLoadingError',
            function( error ) {
                this.logging.push("ajaxLoadingError - error : " + error );
            }
        );
    },
    methods: {
        addItem: function() {
            var self = this;
            var item = {
                "id" : this.values.length + 1,
                "name": "name " + (this.values.length+1),
                "country": "Portugal",
                "age": 26,
            };
            this.values.push(item);
        },
        toggleFilter: function() {
            this.showFilter = !this.showFilter;
        },
        togglePicker: function() {
            this.showPicker = !this.showPicker;
        },
        togglePagination: function () {
            this.paginated = !this.paginated;
        },
		
    },
	
});