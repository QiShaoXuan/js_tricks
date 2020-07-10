// 解决平滑滚动存在兼容性问题
export default (
  yORxy: number | { x: number; y: number },
  params?: {
    smooth: boolean;
    callBack: null | Function;
    averageStep: number;
  }
) => {
  let xy = { x: 0, y: 0 };
  const { smooth, callback, averageStep } = Object.assign(
    {
      smooth: true,
      callback: null,
      averageStep: 50
    },
    params
  );
  const isSmooth = smooth === undefined ? true : smooth;
  if (typeof yORxy === "number") {
    xy.y = yORxy;
  } else {
    xy = Object.assign(xy, yORxy);
  }

  if (!isSmooth) {
    window.scrollTo(xy.x, xy.y);
    return callback && callback();
  }

  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  let scrollLeft =
    document.documentElement.scrollLeft || document.body.scrollLeft;

  const scrollFn = () => {
    if (scrollLeft === xy.x && scrollTop === xy.y) {
      return callback && callback();
    }

    scrollTop =
      scrollTop - averageStep <= xy.y ? xy.y : scrollTop - averageStep;
    scrollLeft =
      scrollLeft - averageStep <= xy.x ? xy.x : scrollLeft - averageStep;
    window.scrollTo(scrollLeft, scrollTop);
    requestAnimationFrame(scrollFn);
  };

  scrollFn();
};
