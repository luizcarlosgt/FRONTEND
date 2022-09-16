
var app = new Vue({
    el:"#app",
    data:{
        numbers: null,
        textDate: null
    },

    created: function(){
        const date = new Date()

        this.month = date.getMonth()
        this.day = date.getDate()
        this.year = date.getFullYear()
        
        this.seedCalendar()
        this.textDate = this.getDateInTextFormat()
        var firstDayWeekInMonth = this.firstDayWeekInMonth(this.year, this.month);
        this.numberForFirstDay = new Array(firstDayWeekInMonth).fill(null)      
    },

    methods:{
        firstDayWeekInMonth: function() {
            return new Date(this.year, this.month, 1).getDay() ;
        },
        
        getDateInTextFormat: function() {
            const mydate = new Date(this.year, this.month, this.day)
            var options = { month: 'long', day: 'numeric'};
            return  mydate.toLocaleDateString("pt-br", options)
        },
        
        seedCalendar: function() {  
            var numberOfDaysInMonth = new Date(this.month, this.month, 0).getDate();
            var arrayNumbersOfDays = Object.keys(new Array(numberOfDaysInMonth - 1).fill(null))
            arrayNumbersOfDays.shift()
            this.numbers = arrayNumbersOfDays
        },

        next: function(){
            this.month = this.month + 1
            this.seedCalendar()
        },
    
        priv: function(){
            this.month = this.month - 1
            this.seedCalendar()
        }
    }
})

    dia = new Date().getDate()
    var d = document.getElementsByClassName('number numberDays')[dia - 1]
    d.style.background = '#6FA9E3'
    d.style.color = 'white'