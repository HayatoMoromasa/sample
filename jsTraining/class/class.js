//即時関数
// (() => {

// })();


// (() => {
//     const $elm = document.querySelector('#js-accordion');
//     const $trigger = $elm.getElementsByTagName('a');
//     $trigger[0].addEventListener('click', (e)=> clickHandler(e));
//     const clickHandler = (e) => {
//         //リンク除去
//         e.preventDefault();
//         //次の要素とってくる
//         const $content = $trigger[0].nextElementSibling;
//         if ($content.style.display === 'block') {
//             $content.style.display = 'none';
//         } else {
//             $content.style.display = 'block';
//         }
//     };
// })();

//↑をリファクタリング
// (() => {
//     const $elm = document.querySelector('#js-accordion');
//     const $trigger = $elm.getElementsByTagName('a');
//     const triggerLen = $trigger.length;
//     let index = 0;
//     while(index < triggerLen) {
//         $trigger[index].addEventListener('click', (e)=> clickHandler(e));
//         index++;
//     }

//     const clickHandler = (e) => {
//         //リンク除去
//         e.preventDefault();
//         //イベントがアタッチされているオブジェクトを返す、クリックされたやつを返す的な
//         const $target = e.currentTarget;
//         console.log($target)
//         //次の要素とってくる
//         const $content = $target.nextElementSibling;
//         if ($content.style.display === 'block') {
//             $content.style.display = 'none';
//         } else {
//             $content.style.display = 'block';
//         }
//     };
// })();

//↑これをクラス化
(()=> {
class Accordion {
    //初期化
    constructor(obj){
        console.log('obj: ', obj.hookName)
        console.log('obj: ', obj.tagName)

        const $elm = document.querySelector(obj.hookName);
        const $trigger = $elm.getElementsByTagName(obj.tagName);
        const triggerLen = $trigger.length;
        let index = 0;
        while(index < triggerLen) {
            //thisを加える(このケースではクラスそのものを参照する)
            $trigger[index].addEventListener('click', (e)=> this.clickHandler(e));
            index++;
        }
        //クラスの中で呼ぶ関数はthisつける
        this.yoFuckMan();
    }

    //クラスの中で呼びたい関数
    yoFuckMan() {
        console.log('yoFuckMan!');
    }

    //クリックしたら実行される処理
        clickHandler = (e) => {
        //リンク除去
        e.preventDefault();
        //イベントがアタッチされているオブジェクトを返す、クリックされたやつを返す的な
        const $target = e.currentTarget;
        //次の要素とってくる
        const $content = $target.nextElementSibling;
        if ($content.style.display === 'block') {
            $content.style.display = 'none';
            $content.style.animation = 'fadeInOut 0.3s ease-in-out 0s';
        } else {
            $content.style.display = 'block';
            $content.style.animation = 'fadeInOut 0.3s ease-in-out';
        }
    };
}
const fuckingAccordion = new Accordion({
    hookName: '#js-faq',
    tagName: 'p'
});
const dummyAccordion = new Accordion({
    hookName: '#js-accordion',
    tagName: 'a'
})
const miniAccordion = new Accordion({
    hookName: '#js-accordion-mini',
    tagName: 'dt'
})
})();



//勝手にやってみた系
// const el = document.querySelectorAll('.accordion-trigger');
//     for(let i = 0; i < el.length; i++){
//         window.addEventListener('click',()=>{
//                 el[i].classList.toggle('toggle');
//         });

//     }

