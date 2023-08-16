// 代码片段
let loading = false;
let aFn = [];
let timer = null;
const searchParams = {};
const id = 100;
const getDataList = () => {
  loading = true;
  const fn = () => {
    
    // 数据请求
    API.getList({
      pageParam: {
        ...searchParams,
      },
      id: id,
    })
      .then((res) => {
        loading = false;
        
        // 数据渲染 this.dataLlist
        this.dataList = res.list || [];
      })
      .catch((err) => {
        loading = false;
        alert(err.description);
      });
  };

  aFn.push(fn);

  if (timer) {
    clearTimeout(timer);
  }

  aFn.length == 1 ? times = 0 : times = 300

  timer = setTimeout(() => {
    const fnNewest = aFn.pop();
    if (fnNewest) {
      fnNewest();
      aFn = aFn.filter(Boolean);
    }
  }, times);
      
  };
