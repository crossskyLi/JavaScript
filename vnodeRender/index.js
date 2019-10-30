export function renderVnode(vnode) {
  // 声明一个空节点作为容器
  // 递归vnode 数据,遍历children
  const fragment = document.createDocumentFragment();
  const fragmentList = [];
  let $elem = null;

  function setProps(node, ele, propsKey = "props") {
    if (node.hasOwnProperty('props')) {
      for (const key in node['props']) {
        ele.setAttribute(key, node['props'][key])
      }
    }
  }
  if (!$elem) {
    if (Array.isArray(vnode)) {
      let $child;
      vnode.forEach(node => {
        fragmentList.push(fragment.cloneNode());
        $elem = document.createElement(node.tagName);
        const index = fragmentList.length - 1 >= 0 ? index : 0

        setProps(node, $elem, 'props');

        if (node.children && node.children.length) {
          node.children.forEach((child) => {
            $child = renderVnode(child);
            $elem.appendChild($child);
          })
        }
        fragmentList[fragmentList.length - 1].appendChild($elem);
        return fragmentList
      })
    } else if (Object.prototype.toString.call(vnode) === "[object Object]") {
      $elem = document.createElement(vnode.tagName);

      setProps(vnode, $elem, 'props');

      if (Array.isArray(vnode.children) && vnode.children.length) {
        vnode.children.forEach(child => {
          const $childElem = renderVnode(child);
          $elem.appendChild($childElem);
        })
      }
      fragment.appendChild($elem)
      return fragment

    } else {
      $elem = document.createTextNode(vnode)
    }
    return $elem;
  }

}

const vnode = {
  tagName: 'ul',
  props: { class: 'list' },
  children: [{
    tagName: 'li',
    children: [
      {
        tagName: 'ul',
        props: { class: 'list' },
        children: [
          'ddd',
          {
            tagName: 'li',
            children: ['item1']
          }]
      }
    ]
  }, {
    tagName: 'li',
    children: ['item1']
  }]
};

const result = renderVnode(vnode);
document.body.appendChild(result)
