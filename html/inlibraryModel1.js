function person() {
        	this.name = "李四";
        	this.sex = "男";
        				this.setName=function(){
        					Tom.name="张三";
        				 };
        				 this.setSex=function(){
        				Tom.sex="女";
        				}
        };
//         function setName() {
//         	Tom.name = "张三";
//         };
// 
//         function setSex() {
//         	debugger;
//         	Tom.sex = "女";
//         }
        var Tom = new person();
        // export default Tom