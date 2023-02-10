'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	//event为客户端上传的参数
	let num=event.num
	return await db.collection('case').orderBy('_id','desc').skip(num*10).limit(10).get();
};
