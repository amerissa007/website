"use strict";(self.webpackChunkpersonal_website2=self.webpackChunkpersonal_website2||[]).push([[1215],{1215:(e,i,t)=>{t.d(i,{LifeUpdater:()=>r});var n=t(4409);class a extends n.PV{constructor(){super(),this.sync=!1}load(e){e&&(super.load(e),void 0!==e.sync&&(this.sync=e.sync))}}class o extends n.PV{constructor(){super(),this.sync=!1}load(e){e&&(super.load(e),void 0!==e.sync&&(this.sync=e.sync))}}class s{constructor(){this.count=0,this.delay=new a,this.duration=new o}load(e){e&&(void 0!==e.count&&(this.count=e.count),this.delay.load(e.delay),this.duration.load(e.duration))}}class r{constructor(e){this.container=e}init(e){const i=this.container,t=e.options.life;t&&(e.life={delay:i.retina.reduceFactor?(0,n.VG)(t.delay.value)*(t.delay.sync?1:(0,n.G0)())/i.retina.reduceFactor*n.Xu:0,delayTime:0,duration:i.retina.reduceFactor?(0,n.VG)(t.duration.value)*(t.duration.sync?1:(0,n.G0)())/i.retina.reduceFactor*n.Xu:0,time:0,count:t.count},e.life.duration<=0&&(e.life.duration=-1),e.life.count<=0&&(e.life.count=-1),e.life&&(e.spawning=e.life.delay>0))}isEnabled(e){return!e.destroyed}loadOptions(e){e.life||(e.life=new s);for(var i=arguments.length,t=new Array(i>1?i-1:0),n=1;n<i;n++)t[n-1]=arguments[n];for(const a of t)e.life.load(null===a||void 0===a?void 0:a.life)}update(e,i){this.isEnabled(e)&&e.life&&function(e,i,t){if(!e.life)return;const a=e.life;let o=!1;if(e.spawning){if(a.delayTime+=i.value,!(a.delayTime>=e.life.delay))return;o=!0,e.spawning=!1,a.delayTime=0,a.time=0}if(-1===a.duration)return;if(e.spawning)return;if(o?a.time=0:a.time+=i.value,a.time<a.duration)return;if(a.time=0,e.life.count>0&&e.life.count--,0===e.life.count)return void e.destroy();const s=(0,n.DT)(0,t.width),r=(0,n.DT)(0,t.width);e.position.x=(0,n.BH)(s),e.position.y=(0,n.BH)(r),e.spawning=!0,a.delayTime=0,a.time=0,e.reset();const l=e.options.life;l&&(a.delay=(0,n.VG)(l.delay.value)*n.Xu,a.duration=(0,n.VG)(l.duration.value)*n.Xu)}(e,i,this.container.canvas.size)}}}}]);
//# sourceMappingURL=1215.a24ffa6e.chunk.js.map