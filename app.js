new Vue({
  el: '#exercise',
  data: {
    array: ['Rich', 'Cody', 'Kole', 'Alex'],
    name: 'Derek',
    age: '24',
    randD: Math.random(),
    textValue: '',
    isHighlighted: false,
    isShrunk: true,
    barArray: ['1px','10px','20px','30px','40px','50px','60px','70px','80px','90px','100px','110px','120px','130px','140px','150px'],
    barCount: 0,
    barPercent: 1,
    showP: true,
  },
  
  methods: {
    startEffect: function () {
      var v = this;
      setInterval(function(){ 
        v.isHighlighted = v.isShrunk;
        v.isShrunk = !v.isShrunk;
      }, 1000);
      
    },
    startProgress: function () { 
      var v = this;
      setInterval(function(){ 
        if(v.barCount == 15){
          v.barCount = 0;
        }
        else{
          v.barCount++;
        }
        // Change the width to the array above
        v.barPercent = v.barArray[v.barCount];
      }, 500);
    },
    alertMe(){
      alert('Woah There! You\'re clicking too hard')
    },
    logStrokes(){
      this.textValue = event.target.value
    },
    randThis(){
      randD = Math.random();
    }
  },
  computed:{
    barStyle(){
      return{
        width: this.barPercent
      }
    }
  }

});