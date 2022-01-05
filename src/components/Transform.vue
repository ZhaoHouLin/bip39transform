<script>
import { onMounted, reactive, ref } from '@vue/runtime-core';
import englishCodeData from '../data/english';
import chineseTrCodeData from '../data/chinese_traditional'
import japaneseCodeData from '../data/japanese'
import koreanCodeData from '../data/korean'
import frenchCodeData from '../data/french'
import italianCodeData from '../data/italian';
import czechCodeData from '../data/czech';
import spanishCodeData from '../data/spanish';
import portugueseCodeData from '../data/portuguese';

export default {
  setup() {

    const codeObj = reactive({
      en: {

      },
      chinese: {

      }
    })

    const result = reactive({
      num: {
        title: '數字',
        code: null
      },
      chinese: {
        title: '中文',
        code: null
      },
      japanese: {
        title: '日語',
        code: null
      },
      korean: {
        title: '韓語',
        code: null
      },
      french: {
        title: '法語',
        code: null
      },
      czech: {
        title: '捷克語',
        code: null
      },
      spanish: {
        title: '西班牙語',
        code: null
      },
      portuguese: {
        title: '葡萄牙語',
        code: null
      },
      italian: {
        title: '義大利語',
        code: null
      }
    })
    const insert = ref('')
    
    const load = ()=> {
      englishCodeData.forEach((word,idx)=> {
        codeObj.en[idx+1] = word
      })
      chineseTrCodeData.forEach((word,idx)=> {
        codeObj.chinese[idx+1] = word
      })
      // console.log(codeObj);
    }

    const changeList = ()=> {
      let idx = englishCodeData.findIndex((word)=> {
        return word === insert.value
      })
      
      result.chinese.code = chineseTrCodeData[idx]
      result.japanese.code = japaneseCodeData[idx]
      result.korean.code = koreanCodeData[idx]
      result.french.code = frenchCodeData[idx]
      result.czech.code = czechCodeData[idx]
      result.spanish.code = spanishCodeData[idx]
      result.portuguese.code = portugueseCodeData[idx]
      result.italian.code = italianCodeData[idx]

      result.num.code = idx+=1
  
      // console.log(result);
    }


    onMounted(()=> {
      load()
    })

    return {
      changeList,
      result,
      insert,
      load
    }
  }
}
</script>

<template lang="pug">
.transform
  h1 各語言助記詞轉換
  .list
    .item(v-for='item in result' :key='item.title')
      h3 {{item.title}}
      h4 {{item.code}}
  .info
    h2 請輸入英文助記詞↓
    input(v-model='insert' @input="changeList" )
</template>

<style lang="stylus" scoped>

.transform
  width 45vh
  background-color white
  // border 1px solid #000
  padding 2rem
  box-shadow 1rem 1rem 16px 0.5px #222
  // border-radius 2rem

.transform h1
  margin-bottom 2rem
  text-align center

.transform .list .item
  display flex
  justify-content space-between
  align-items center
  margin-bottom 0.8rem
  border-bottom 1px solid #000
  // border 1px solid #000
  height 1.5rem
  h3
    // border 1px solid #000
    width 100px
  h4
    display flex
    justify-content center
.transform .info  
  display flex
  justify-content center
  flex-direction column
  align-items center
  font-size 1rem
  margin-top 2rem
  h2
    margin-bottom 0.5rem
  input 
    width 100%
    font-size 1.2rem
    text-align center
    padding 0.5rem

</style>