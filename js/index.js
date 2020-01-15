$(function() {
  let btnIsShow2 = false
  let viewIsShow2 = false
  let btnIsShow1 = false
  let viewIsShow1 = false

  // 动态的显示和隐藏产品方案下拉页
  setTimeout(() => {
    $('#product_btn').hover(function(event) {
      console.log('production调用')
      if (event.type == 'mouseenter') {
        productHeader()
        $('.content_header_top2')
          .stop(false, false)
          .slideDown(function() {
            btnIsShow2 = true
            viewIsShow2 = false
          })
      } else if (event.type == 'mouseleave') {
        setTimeout(() => {
          if (viewIsShow2) return
          console.log('btn: mouseleave')
          $('.content_header_top2')
            .stop(false, false)
            .slideUp(function() {
              btnIsShow2 = false
            })
        }, 0)
      }
    })

    $('.content_header_top2').hover(function(event) {
      if (event.type == 'mouseenter') {
        console.log('22222')
        $('.content_header_top2')
          .stop(false, false)
          .slideDown(function() {
            viewIsShow2 = true
            btnIsShow2 = false
          })
      } else if (event.type == 'mouseleave') {
        setTimeout(() => {
          if (btnIsShow2) return
          console.log('header_top: mouseleave')
          $('.content_header_top2')
            .stop(false, false)
            .slideUp(function() {
              viewIsShow2 = false
            })
        }, 0)
      }
    })
  }, 100)

  // 动态的显示和隐藏解决方案下拉页
  setTimeout(() => {
    $('#solution_btn').hover(function(event) {
      console.log('solution调用')
      solutionHeader()
      if (event.type == 'mouseenter') {
        $('.content_header_top1')
          .stop(false, false)
          .slideDown(function() {
            btnIsShow1 = true
            viewIsShow1 = false
          })
      } else if (event.type == 'mouseleave') {
        setTimeout(() => {
          if (viewIsShow1) return
          $('.content_header_top1')
            .stop(false, false)
            .slideUp(function() {
              btnIsShow1 = false
            })
        }, 0)
      }
    })

    $('.content_header_top1').hover(function(event) {
      if (event.type == 'mouseenter') {
        $('.content_header_top1')
          .stop(false, false)
          .slideDown(function() {
            viewIsShow1 = true
            btnIsShow1 = false
          })
      } else if (event.type == 'mouseleave') {
        setTimeout(() => {
          if (btnIsShow1) return
          console.log('header_top: mouseleave')
          $('.content_header_top1')
            .stop(false, false)
            .slideUp(function() {
              viewIsShow1 = false
            })
        }, 0)
      }
    })
  }, 100)

  function productHeader() {
    var headerTop = document.getElementById('appendChildId2')
    headerTop.innerHTML = `
  <div class="top_item personal-idea personal-p">
    <span>
      <img src="./imgs/production/个人方案.png" />
      <span>个人方案</span>
    </span>
    <p>解决个人商户在用户核验等的问题</p>
    </div>
    <div class="top_item commpany-idea commpany-p">
    <span>
      <img src="./imgs/production/企业方案.png" />
      <span>企业方案</span>
    </span>
    <p>解决个人商户在用户核验等的问题</p>
    </div>
    <div class="top_item gover-idea gover-p">
    <span>
      <img src="./imgs/production/政府合作.png" />
      <span>政府合作</span>
    </span>
    <p>解决个人商户在用户核验等的问题</p>
</div>`

    $('.personal-p').on('click', function() {
      console.log('yyyyyy')
      location.href = './personal_plain_info.html'
    })
    $('.commpany-p').on('click', function() {
      location.href = './company_plain_info.html'
    })
    $('.gover-p').on('click', function() {
      location.href = './gover_coop.html'
    })
  }

  function solutionHeader() {
    var headerTop = document.getElementById('appendChildId1')
    headerTop.innerHTML = `<div class="top_item personal-idea personal-x">
  <span>
    <img src="./imgs/solution/house.png" />
    <span>网约房解决方案</span>
  </span>
  <p>关于该标题的副标题或者相关文案内容</p>
</div>
<div class="top_item commpany-idea commpany-x">
  <span>
    <img src="./imgs/solution/跨境电商解决方案.png" />
    <span>跨境电商解决方案</span>
  </span>
  <p>解决个人商户在用户核验等的问题</p>
</div>
<div class="top_item gover-idea gover-x">
  <span>
    <img src="./imgs/solution/智慧酒店解决方案.png" />
    <span>智慧政务解决方案</span>
  </span>
  <p>解决个人商户在用户核验等的问题</p>
</div>
<div class="top_item gover-idea1 hotel-x">
  <span>
    <img src="./imgs/solution/智慧酒店解决方案.png" />
    <span>智慧酒店解决方案</span>
  </span>
  <p>解决个人商户在用户核验等的问题</p>
</div> `

    $('.personal-x').on('click', function() {
      location.href = './solution_net.html'
    })
    $('.commpany-x').on('click', function() {
      location.href = './solition_cross.html'
    })
    $('.gover-x').on('click', function() {
      location.href = './solution_wisdom.html'
    })
    $('.hotel-x').on('click', function() {
      location.href = './solution_hotel.html'
    })
  }
})
