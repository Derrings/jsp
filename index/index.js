var dom = {
    init : function(){
        this.middleEffect();
        this.loginArea();
    },
    middleEffect : function(){
        var xzma = document.getElementsByClassName("xzma")[0];
        var middle = document.getElementsByClassName("middletext")[0];
        var middleImg = middle.getElementsByTagName("div")[0];
        var middleMa = middleImg.getElementsByTagName("img")[0];
        middleMa.onmouseover = function(){
            xzma.style.display = "block";
        },
        xzma.onmouseover = function(){
            xzma.style.display = "block";
        },
        xzma.onmouseout = function(){
            xzma.style.display = "none";
        }
    },
    loginArea : function (){
        this.changeToMobile();
        this.changeToPc();
        this.changePath();
        this.mask();
        // this.selectPhzone();
    },
    changeToMobile : function(){
        var self = this;
        this.pcico = document.querySelector("#banner .contener .pc .ico");
        this.mobileico = document.querySelector("#banner .contener .mobile .ico")
        this.pc = document.getElementsByClassName("pc")[0];
        this.mobile = document.getElementsByClassName("mobile")[0];
        this.pcico.onclick = function(){
            self.pc.style.display = "none";
            self.mobile.style.display = "block";
        }
    },
    changeToPc : function(){
        var self = this;
        this.mobileico.onclick = function(){
            self.pc.style.display = "block";
            self.mobile.style.display = "none";
        }
    },
    changePath : function (){
        var self = this;
        this.logPath = this.pc.getElementsByTagName("ul")[0];
        this.selectPath1 = this.logPath.getElementsByTagName("li")[0];
        this.selectPath2 = this.logPath.getElementsByTagName("li")[1];
        this.path1 = this.pc.getElementsByClassName("path1")[0];
        this.path2 = this.pc.getElementsByClassName("path2")[0];
        this.path3 = this.pc.getElementsByClassName("path3")[0];
        this.hw = document.querySelector(".path2 p a");
        this.zh = document.querySelector(".path3 p a");
        this.selectPath1.onclick = function(){
            if(self.selectPath1.className === "choosen") return;
            else {
                self.selectPath1.className = "choosen";
                self.selectPath2.className = "unchoosen";
                self.path1.style.display = "block";
                self.path2.style.display = "none";
                self.path3.style.display = "none";
            }
        }
        this.selectPath2.onclick = function(){
            if(self.selectPath2.className === "choosen") return;
            else {
                self.selectPath2.className = "choosen";
                self.selectPath1.className = "unchoosen";
                self.path1.style.display = "none";
                self.path2.style.display = "block";
            }
        }
        this.hw.onclick = function(){
            self.path3.style.display = "block";
            self.path2.style.display = "none";
        }
        this.zh.onclick = function(){
            self.path3.style.display = "none";
            self.path2.style.display = "block";
        }
    },
    mask : function(){
        var self = this;
        this.phzone = document.getElementsByClassName('phzone');
        this.maskpage = document.getElementsByClassName('mask')[0];
        this.closeMask = document.querySelector('.mask .contain .header span');
        for(var i = 0; i < 2; i++){
            this.phzone[i].onclick = function(){
                self.maskpage.style.display = "block";
            }
        }
        this.closeMask.onclick = function (){
            self.maskpage.style.display = "none";
        }
    }
    // selectPhzone : function(){
    //     var self = this;
    //     this.phList = this.maskpage.getElementsByClassName("area")[0];
    //     var active = this.phList.getElementsByClassName('checked')[0];
    //     this.phList.onclick = function (e){
    //         var event = e || window.event;
    //         var target = event.target || event.srcElement;
    //         target.className = "checked";
    //         active.classList.remove("checked");
    //         active = target;
    //         self.maskpage.style.display = "none";
    //         if(self.path3.style.display === 'block'){
    //             self.phzone[1].innerText = target.nextElementSibling.innerText || target.innerText;
    //         }else{
    //             self.phzone[0].innerText = target.nextElementSibling.innerText || target.innerText;
    //         }
    //     }
    // }
}
