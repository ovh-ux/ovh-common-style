
 Managers common style
 
[![Build Status](https://travis-ci.org/ovh-ux/ovh-common-style.svg)](https://travis-ci.org/ovh-ux/ovh-common-style)

# Managers common style

![OVH components](githubBanner.png)

[![Maintenance](https://img.shields.io/maintenance/yes/2017.svg)]() [![Chat on gitter](https://img.shields.io/gitter/room/ovh/ux.svg)](https://gitter.im/ovh/ux) [![Build Status](https://travis-ci.org/ovh-ux/ovh-common-style.svg)](https://travis-ci.org/ovh-ux/ovh-common-style)

[![NPM](https://nodei.co/npm/ovh-common-style.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/ovh-common-style/)

# Usage

## Font size

OVH common style provides some classes for override font-size on a tag.

This example applies `font-size` to `16px` :

```
<span class="fs16"></span>
```

You can do the same thing for line-height, default prefix is lh.

```
<span class="fs16 lh16"></span>
```

You can change default values by override less properties :

* @font-size-values
* @font-size-class

* @line-height-values
* @line-height-class

By default, font size class is : @font-size-class + @font-size-value. Same logic for line-height.


## Helpers

### Data exemple helper (helpers.less)

* Text center

```html
    <p class="text-center">this text is center</p>
```

* Text opacity

```html
    <p class="opacity4">this text has 0.4 opacity</p>
```

* No style button

```html
    <button class="no-style">This button has not style</button>
```

* Space (4, 8, 16, 20) (px)


```html
    <div class="space-m20">margin : 20px</div>
    <div class="top-space-m16">margin-top : 16px</div>
    <div class="bottom-space-m8">margin-bottom : 8px</div>

    <div class="left-space-p8">padding-left : 8px</div>
    <div class="right-space-p4">padding-right : 4px</div>
```

* responsive space (4, 8, 16, 20) (px) (xs, sm, md, lg like bootstrap 3)


```html
    <div class="space-lg-m20">margin : 20px for media min-width: 1200px </div>
    <div class="top-space-md-m16">margin-top : 16px for media min-width: 992px </div>
    <div class="bottom-space-sm-m8">margin-bottom : 8px for media min-width: 801px </div>

    <div class="right-space-xs-p4">padding-right : 4px for media min-width: 480px </div>
```

* disable text selection (noselect)

```html
    <div class="noselect">This can't be selected with the mouse.</div>
```

### Data exemple table (table.less) - work this [Bootstrap 3](http://getbootstrap.com/css/#tables "Documentation")

* Responsive table

```html
    <div class="table-responsive-vertical shadow-z-1">
        <table class="table table-pretty table-hover table-striped">
            <thead>
                <tr>
                    <th>
                        <span>column title</span>
                        <span class="table-pretty-filter">
                            <i data-ng-show="order.by !== 'minDisk'" class="fa fa-sort"></i>
                            <i data-ng-show="order.by === 'minDisk' && order.reverse" class="fa fa-sort-desc"></i>
                            <i data-ng-show="order.by === 'minDisk' && !order.reverse" class="fa fa-sort-asc"></i>
                        </span>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td data-title="column title"></td>
                </tr>
```

### Data exemple animation (animation.less) - work this [animate.css](http://daneden.github.io/animate.css/ "Documentation")

You can use all animation of animate.css

You can speed up animation with .animated-300 or infinite .animated-infinite

* simple animate (without 'animate' prefix)

```html
    <div class="opacity2-enter">this div animates opacity from 0.2 to 1</div>

    <div class="animated bounce">this div is animated by bounce of animate.css (!! animated class is important)</div>

```

* angular animate (work with angular-animate) (with 'animate' prefix)

```html
    <div data-ng-if="open" class="animate-opacity4-enter animate-opacity5-leave">
        this div animates opacity from 0.4 to 1 when it shows and animates opacity from 1 to 0.5 when hidden
    </div>
```

* angular animate (work with angular-animate and animate.css)

```html
    <div class="animate-fadeInLeft-enter animate-fadeOutRight-leave"><
        this div animates opacity and moves right to left when it shows and animates opacity and moves left to right when hidden
    </div>
```

### Datepicker style .datepicker-ui-pretty (datepicker-ui.less) - [datepicker](http://angular-ui.github.io/bootstrap/#/datepicker "Documentation")

```
<div class="input-group">
    <div class="input-group-addon"><i class="fa fa-calendar"></i></div>

    <input type="text" class="form-control datepicker-ui-pretty"
        id="searchDate"
        name="searchDate"
        placeholder="{{ 'search_date' | translate}}"
        datepicker-popup="shortDate"
        is-open="openedSearchDate"
        ng-click="openedSearchDate = true"
        ng-model="search.date">

    <div class="input-group-addon" data-ng-show="search.date">
        <button class="no-style" data-ng-click="search.date = null">
            <i class="fa fa-times"></i>
        </button>
    </div>
</div>
```

### Data exemple rotate animation

```
<button class="no-style" data-ng-click="open = !open">
    <span>open</span>
    <i class="fa fa-caret-down rotate" data-ng-class="{'rotate180': open}"></i>
</button>
```



## Directive: Spinner
---------------------

Add an configurable SVG spinner.

```html
<spinner />
<div spinner></div>
<div spinner size="32"></div>
<div spinner color="pink"></div>
<div spinner type="bars"></div>
```

### Options

  - `size`: Set the width and Height ( _default_ : 16px)
  - `width`: Set the width, if `size` not given ( _default_ : 16px)
  - `height`: Set the Height, if `size` not given ( _default_ : 16px)
  - `color`: Set the color ( _default_ : #222)
  - `type`: Set the spinner type, see [here](http://jxnblk.com/loading/) ( _default_ : spinning-bubbles, _can be_ : 'bubbles', 'bars', 'spinning-bubbles')


 
# Installation

## Bower

    bower install ovh-common-style --save

## NPM

    npm install ovh-common-style --save
 
# Configuration

## Angularjs directives

```html
 <script src="bower_components/ovh-common-style/dist/ovh-common-style.min.js"></script
```

```javascript
angular.module("myApp", ["ovh-common-style"]);
```

## LESS style

```less
@import 'ovh-common-style/less/helpers.less';
@import 'ovh-common-style/less/animation.less';
@import 'ovh-common-style/less/table.less';
@import 'ovh-common-style/less/datepicker-ui.less';
@import 'ovh-common-style/less/spinner/spinner.less';
```

## Fonts

```less
@import 'ovh-common-style/less/fonts/open-sans.less';
```
 
## Get the sources
 
```bash
    git clone https://github.com/ovh-ux/ovh-common-style.git
    cd ovh-common-style
    npm install
    bower install
```
 
You've developed a new cool feature ? Fixed an annoying bug ? We'd be happy
to hear from you !

Have a look in [CONTRIBUTING.md](https://github.com/ovh-ux/ovh-common-style/blob/master/CONTRIBUTING.md)
 
## Run the tests
 
```
npm test
```
 
# Related links
 
 * Contribute: https://github.com/ovh-ux/ovh-common-style
 * Report bugs: https://github.com/ovh-ux/ovh-common-style/issues
 * Get latest version: https://github.com/ovh-ux/ovh-common-style
 
# License
 
See https://github.com/ovh-ux/ovh-common-style/blob/master/LICENSE
