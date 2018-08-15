
var sourceData = [{
    product: "手机",
    region: "华东",
    sale: [120, 100, 140, 160, 180, 185, 190, 210, 230, 245, 255, 270]
}, {
    product: "手机",
    region: "华北",
    sale: [80, 70, 90, 110, 130, 145, 150, 160, 170, 185, 190, 200]
}, {
    product: "手机",
    region: "华南",
    sale: [220, 200, 240, 250, 260, 270, 280, 295, 310, 335, 355, 380]
}, {
    product: "笔记本",
    region: "华东",
    sale: [50, 60, 80, 110, 30, 20, 70, 30, 420, 30, 20, 20]
}, {
    product: "笔记本",
    region: "华北",
    sale: [30, 35, 50, 70, 20, 15, 30, 50, 710, 130, 20, 20]
}, {
    product: "笔记本",
    region: "华南",
    sale: [80, 120, 130, 140, 70, 75, 120, 90, 550, 120, 110, 100]
}, {
    product: "智能音箱",
    region: "华东",
    sale: [10, 30, 4, 5, 6, 5, 4, 5, 6, 5, 5, 25]
}, {
    product: "智能音箱",
    region: "华北",
    sale: [15, 50, 15, 15, 12, 11, 11, 12, 12, 14, 12, 40]
}, {
    product: "智能音箱",
    region: "华南",
    sale: [10, 40, 10, 6, 5, 6, 8, 6, 6, 6, 7, 26]
}]


$(document).ready(_ => {
    // 初始化值
    var product = [], region = [], productSelectd, regionSelected
    for(let item of sourceData){
        // console.log(item)
        if(!product.includes(item.product)){
            product.push(item.product)
        }
        if(!region.includes(item.region)){
            region.push(item.region)
        }
    }
    for(let p of product){
        // console.log(p)
        $("#product-select").append(`<option value="${p}">${p}</option>`)
    }
    for(let r of region){
        // console.log(r)
        $("#region-select").append(`<option value="${r}">${r}</option>`)
    }
    
    // 给商品选择栏绑定改变事件
    $("#product-select").change(_ =>{
        // console.log('product changed!')
        productSelectd = $("#product-select").val() // 获取选到的商品
        showTable()
    })

    // 给地区选择栏绑定改变事件
    $("#region-select").change(_ =>{
        // console.log('region changed!')
        regionSelected = $("#region-select").val() // 获取选到的地区
        showTable()
    })

    // 渲染表格
    function showTable(){
        sourceData.forEach(e =>{
            if(e.product == productSelectd && e.region == regionSelected){
                // console.log(e)
                let str = `<tr id="add"><td>${productSelectd}</td><td>${regionSelected}</td>`
                for(let s of e.sale){
                    str += `<td>${s}</td>`
                }
                str += `</tr>`
                // console.log(str)
                $('#table').append(str)
            }
        })
        
    }
})

