function Grid(r){this.noGrids=NO_GRIDS,this.gridArray=[]}function Cells(r,i){this.index=r,this.value=0,this.x=Math.floor(r/i),this.y=r%i}var NO_GRIDS=4;Grid.prototype.init=function(){for(var r=this,i,o=0;o<r.noGrids*r.noGrids;o++)i=r.gridArray[o]=new Cells(o,r.noGrids);console.log(r.gridArray)},Grid.prototype.render=function(){for(var r=this,i="<div class='grid-row'></div>",o=0;o<r.noGrids;o++)$("#grids").append(i);for(var d="<div class='grid-cell'></div>",s=0;s<r.noGrids;s++)$(".grid-row").append(d)};var grids=new Grid(NO_GRIDS);grids.init(),grids.render(),Cells.prototype.test1=function(){console.log("hello")};