function inlibraryModel(res) {
	debugger;
	this.code = "";//物料名称
	this.TotalAmount = 0;//物料总数
	this.goods = [];//物料个数
	this.codeid = "";//物料ID
	this.storageName = "";//物料货架
	//首次新增物料
	this.setMaterial = function(res) {
		debugger;
		this.code = res.code;//物料名称赋值
		this.TotalAmount = res.TotalAmount;//物料总数
		this.goods.push()//物料个数
		this.codeid =  res.codeid;//物料ID
	};
	//物料相加
	this.addGoods = function(res) {
		var storage =new inlibraryModel()
        this.goods.push();//物料个数
		this.TotalAmount = this.TotalAmount + this.TotalAmount; //总数相加
	}
	this.setInlibrary=function(res){
		debugger;
		this.storageName="物料";	
	}
	    if(res){
		this.init(res);
	}
}

	
const inlibraryModels = new inlibraryModel();
export default inlibraryModels;