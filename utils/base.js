import cryptoJs from 'crypto-js'
const sessionStorage = window.sessionStorage
const JSON = window.JSON
const secretCode = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&<>'

/**
 * @summary 深拷贝
 * @param {*} obj 拷贝对象
 * @param {*} weakMap 缓存
 * @param {*} isStructuredClone是否使用浏览器自带克隆
 */
export function deepCopy(obj, isStructuredClone = false, weakMap = new WeakMap()) {
  if (window.structuredClone && isStructuredClone) {
    // 不能处理 function Symbol DOM节点 getter setter 对象原型等
    return structuredClone(obj)
  }
  if (weakMap.has(obj)) { return weakMap.get(obj) }
  if (obj === null) { return null }
  if (obj instanceof RegExp) { return new RegExp(obj) }
  if (obj instanceof Date) { return new Date(obj) }
  if (typeof obj !== 'object') { return obj }
  const res = new obj.constructor()
  // 处理Symbol情况
  let symbolType = Object.getOwnPropertySymbols(obj)
  if (symbolType.length) {
    symbolType.forEach(item => {
      if (typeof obj[item] == 'object' && obj[item] != null) {
        res[item] = deepCopy(obj[item])
      } else {
        res[item] = obj[item]
      }
    })
  }
  weakMap.set(obj, res)
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      res[key] = deepCopy(obj[key], weakMap)
    }
  }
  return res
}
/**
 * @summary 对象数据去重
 * @param {*} arr 数据源
 * @param {*} uniqueFlag 属性
 */
export function uniqueArrObj(arr, uniqueFlag) {
  const tempArr = []
  const uniqueVal = []
  for (const item of arr) {
    if (uniqueVal.includes(item[uniqueFlag])) continue
    uniqueVal.push(item[uniqueFlag])
    tempArr.push(item)
  }
  return tempArr
}
/**
 * @summary 数组拆分
 * @param {*} arr 
 * @param {*} size 把size个数拆分为一个数组
 */
export function arrSplit(arr = [], size = 1) {
  if (Object.prototype.toString.call(arr).slice(8, -1) == 'Array') {
    return arr.length ? arr.reduce((t, v) => (t[t.length - 1].length === size ? t.push([v]) : t[t.length - 1].push(v), t), [[]]) : []
  }
  let msg = "the data source isn't an array!"
  throw new Error(msg.toUpperCase())
}

/**
 * @summary 千分符参数
 * @param {*} num 数据源
 */
export function thousands(num) {
  if (typeof num === 'number') num = num + '';
  return num.replace(new RegExp(`(?!^)(?=(\\d{3})+${num.includes('.') ? '\\.' : '$'})`, 'g'), ',')
}

/* 
* @summary 解析url地址参数
* @param url 需要解析的url地址
* @returns 函数
*/
export const getUrlParams = (url) => {
  const urlParams = new URLSearchParams(url ?? window.location.search)
  return {
    get: (name) => urlParams.get(name),
    getAll: () => Object.fromEntries(urlParams.entries())
  }
}

/**
 * @summary 树型数据遍历
 * @param {*} tree  树形结构数据
 * @param {*} fn 执行函数
 */
export function treeForeach(fn, dataTree) {
  dataTree.forEach(item => {
    item.children && treeForeach(fn, item.children)
    fn(item)
  })
}
/**
 * @summary 列表数据转树型结构
 * @param {*} id 对象属性ID
 * @param {*} parentId 对象属性对应的父级ID
 * @param {*} list 数据源
 */
export function listToTree(list = [], id = null, parentId = null) {
  let info = list.reduce((t, v) => (t[v[id]] = v, v.children = [], t), {})
  return list.filter(node => {
    info[node[parentId]] && info[node[parentId]].children.push(node)
    return !node[parentId]
  })
}
/**
 * @param {*} 当前数据ID
 * @param {*} array 数据源
 * @summary 获取父级数据
 */
export function findParents(array, id, isRecursion = false, children = 'children') {
  let parentArray = [];
  if (array.length === 0) {
    return parentArray;
  }
  function recursion(arrayNew, id, isRecursion2, children) {
    for (let i = 0; i < arrayNew.length; i++) {
      let node = arrayNew[i];
      if (node.id === id) {
        parentArray.unshift(node);
        isRecursion && recursion(array, node.parentId, isRecursion2, children);
        break;
      } else {
        let childList = node[children]
        if (!!childList) {
          isRecursion && recursion(childList, id, isRecursion2, children);
        }
      }
    }
    return parentArray;
  }
  parentArray = recursion(array, id, isRecursion, children);
  return parentArray;
}
/**
 * @summary 树形数据转列表
 * @param {*} tree 
 * @param {*} result 
 * @param {*} level 
 */
export function treeToList(tree = [], children = 'children', isDeleteChildren = false, result = [], level = 0) {
  /**
   *递归模式
   */
  tree.forEach(node => {
    node.level = level + 1
    node[children] && treeToList(node[children], children, isDeleteChildren, result, level + 1)
    if (isDeleteChildren) {
      console.log(node[children]);
      delete node[children]
    }
    result.push(node)
  })
  return result
}

/*
* message:需要加密的字符串，对象加密需要转成json字符串
* key： 密钥（加密解密密钥同一个）
*/
export function encryptDes(message, key = secretCode) {
  const keyHex = cryptoJs.enc.Utf8.parse(key)
  const option = { mode: cryptoJs.mode.ECB, padding: cryptoJs.pad.Pkcs7 }
  const encrypted = cryptoJs.DES.encrypt(message, keyHex, option)
  return encrypted.ciphertext.toString() // 返回hex格式密文，如需返回base64格式：encrypted.toString()
}
/*
* message:需要解密的字符串，
* key： 密钥（加密解密密钥同一个）
*/
export function decryptDes(message, key = secretCode) {
  const keyHex = cryptoJs.enc.Utf8.parse(key)
  const decrypted = cryptoJs.DES.decrypt(
    {
      ciphertext: cryptoJs.enc.Hex.parse(message)
    },// 若message是base64格式，则无需转16进制hex，直接传入message即可
    keyHex,
    {
      mode: cryptoJs.mode.ECB,
      padding: cryptoJs.pad.Pkcs7
    }
  )
  return decrypted.toString(cryptoJs.enc.Utf8)
}
// 获取可视化高度
export function getClientHeight(){
  return window.innerHeight
}