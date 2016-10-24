# Homepage Feedback

---
## Overall
Overall I'm quite happy with the results of your respective works. You've all put together various pieces of the puzzle and successfully gotten a page up. Basic concepts such as elements, ids, and classes - at least how they're implemented seem to be pretty much understood by all. Concepts of selection of parts of the page through CSS are also there, and this helps set the stage for some of the selections and manipulations we will do with Javascript soon.

---
## Positive Feedback

I'm thoroughly impressed by how much _extra_ stuff you guys incorporated into your pages. By extra, I mean things that I have not explicitly covered in class such as specific components. But based on what I have covered, many of you managed to explore something new and interesting indicating the ability to take some base concepts you've acquired and apply them to similar problems. Tables, Videos, Maps, Forms, Carousels, Interactive Galleries, Font Icons, Placeholder Images, Google Fonts, Bootstrap Components, ... quite quite interesting.

I'm also quite happy that you all were able to imagine some sort of page and actually put it out there. Sure, it might not look exactly like you wanted. But all of your pages are readable and have layout elements that work more or less.

I'm digging that some of you have figured out that you can use **multiple** column rules to specify the column numbers based on different screen sizes. Example:

	<div class="col-xs-6 col-md-3"></div>

Which gives you 2 columns on a tiny mobile screen and 4 columns on a tablet horizontal (approx.)

Some of you peeps are thoroughly commenting your code. This is a good practice and I encourage it. It also helps me understand how you're thinking. Keep in mind that ultimately, we want comments that help others understand the code, and what it represents - in a concise fashion. But for now, I'd rather see more comments than less. In HTML, you can comment by: `<!-- COMMENTS HERE -->`. In CSS, `/* COMMENTS HERE */`. In JS, `// Single Line COMMENTS HERE` or `/* Multiline Block COMMENTS HERE */`

In general I can see that you guys are trying to use headings to mark certain parts of your page information hierarchy. Others are trying to use elements to designate the semantics of different content on their page. I think our pages aren't so complex enough to warrant complex generalizable classes yet but not bad.


---
## Critical Feedback

### Formatting
With HTML, each child should be one indentation from its parent. We added a package to Atom called _atom-beautify_. This is a one click formatter that will fix most out of format code into properly formatted code. So really there is no excuse. ;) The more important thing though, what I am concerned about is that when you don't keep to good format, or fix format frequently - it leads to your own code being difficult to read and _debug_. So please try to format well. Also note that if you don't like the size of the indentation - you can change the settings/preferences for indentation through the Atom preferences pane. I like to use TAB based indentation equivalent to two spaces. At some point, I will deduct points for messy code since it is really as easy as pushing one button. I really don't understand why you wouldn't want to code cleanly given it is rather easy to do AND it reduces the amount of errors you produce. I mention this every year numerous times so... anyway.

### Bootstrap GRIDs
Bootstrap Grids are very opinionated. In order for them to work properly, you must follow the format:

`.container` > `.row` > `.col-*-*`.

or the following if you want your page to be the entire width of the browser.

`.container-fluid` > `.row` > `.col-*-*`.

You can have multiple rows within a container or multiple columns inside a row (up to 12).

	<div class="container">
		<div class="row">
			<div class="col-md-12"></div>
		</div>
		<div class="row">
			<div class="col-md-4"></div>
			<div class="col-md-4"></div>
			<div class="col-md-4"></div>
		</div>
		<div class="row">
			<div class="col-md-6"></div>
			<div class="col-md-6"></div>
		</div>
	</div>

But if you don't have a `.row` wrapped inside a `.container` it will give you funny spacing outputs. Likewise, if you try to put `content` directly into your `rows` without `columns` when you use `columns` elsewhere, you'll probably get slight alignment issues.

While there are certain cases where you might want a container inside a container, in general once you create a container for your page you can deal with everything else using rows inside the container. Inside a row - you really shouldn't have extra stuff beyond columns as immediate children unless you know exctly what you're doing. So - follow this rule:

`.container` > `.row` > `.col-*-*` > `content`


### Naming Conventions
The names of your files, classes, etc. should really make sense to describe the nature of whatever you're naming in a clear way. Also, in terms of formatting names let's set some ground rules.
1. **Filenames** should be `lowercase` or `kebab-case` or `snake_case`.
2. **Classes** should be `kebab-case` or `camel-case`
3. **JS Variables** should be `camelCase`
4. **JS Class Variables** should be `CapitalCamelCase`
5. **JS CONSTANT Variables** should be `UPPERCASE`


### Styles inside TAGs
In general, it is considered bad form to include styles inside of tag markup. For example: `<div style="padding: 10px;"></div>` The reason this is bad is that once your style concerns are embedded in your HTML page, if you ever need to change it you'll have to go back and find every instance of that change. Also, you will forget that you had styles written in your tags and when you go to create new styles via stylesheet - you will wonder why a particular element isn't behaving how you intended. Inline styles (styles directly written into a tag) has one of the _HIGHEST_ priorities and will overwrite other declared rules.

### Styles inside HTML
In general we like to keep CSS in external files. That means we try to avoid stuff like this:

	<head>
		<style>
			p { ...some rule here... }
		</style>
	</head>

It causes some headache down the road so I discourage it. That said, next semester we will talk about a different kind of approach when it comes to separation of concerns - component based development - which will challenge these rules I'm talking about now.

### Semantics
One particular issue I see is that some of you are using headings a little incorrectly (I suspect.) For example, I see things like this:

	<h1>ANIMALS</h1>
	<h6>Birds</h6>

What happened to Headings 2-5? What I suspect you all are doing is using `H6` because you want the `H6` _STYLES_. This is not really the way to use headings if we understand headings as ways to put information in hierarchical (idea wise) order. It would be better to use an `H2` and then _customize_ the size and spacing of the H2 heading to look like an H6 through CSS. Since Bootstrap offers us some opinions on heading styles - here would be a good reason to _override_ certain size, line-height, margin rules.

### Webhosting Organization / Folders
In general you should try to organize your webhost, server-side folder structure to make sense. Dumping all your images, fonts, styles, into the main folder makes for a messy structure. In general, if you're going to have more than 1 of something (e.g. images, stylesheets, javascript files) it makes sense to create a folder.

	- Homepage
		|_ images (folder)
				|_ userImgA.jpg
				|_ userImgB.jpg
		|_ styles (folder)
				|_ main.css
				|_ fonts.css
		|_ js
				|_ models.js
				|_ main.js
		|_ index.html

	- Cakespage
		|_ index.html

	- Cookiespage
		|_ index.html

### Uploading Files
Remember, if you aren't using a CDN - that means you downloaded your fonts, css, js from somewhere and your page expects to find it locally. That means when you upload your stuff to the server - your URLs in page will be looking for those fonts, css, js files on your (server local) file system. In general - using a CDN when possible is a great way to not have to worry about this stuff and save on traffic.

### Special File Names
index.html is a special name for the file you want your server to automatically serve, if they hit a folder level URL. You can have an index.html for each sub-folder. Please no `Index.html` or `INDEX.html`. Just `index.html` Index is a usually special/reserved convention for HTML files that act as the default loading page.

### IDs
Do NOT use IDs more than once on your page. If you do, unpredictable things can result as your browser only expects to see an ID once. If you want to use something more than once, use a class.

---
## Incidental Feedback

### Css Relational Rules
For the most part, people are using `elementRules`, `#idRules`, and `.classRules` in your CSS. This is fine. That said, you should really think about other CSS rules, such as the relational rules to get to specific parts. Examples:
1. `div > span` - Any span that is a direct child of a div.
2. `div span` - Any span that is inside (however deep) in a div.

These are useful in that you can keep things more generalized without having to create very minute classes throughout your code. Take the following example.

	<div class="special">
		<div class="special-inner"></div>
		<div class="special-inner"></div>
		<div class="special-inner"></div>
	</div>

	.special {}
	.special-inner {}

Could be simplified as the following:

	<div class="special">
		<div></div>
		<div></div>
		<div></div>
	</div>

	.special {}
	.special > div {}

This will help you in that you won't have to keep repeating new classes or add new classes to the inner as you move forward.

### Generalizability of CSS
IDs tend not to be very generalizable. Classes are more generalizable. So rather than doing something like this:

	#idOne h1,
	#idTwo h1 {}

Try something like this and add a class to element with #idOne and #idTwo:

	.heading-container h1 {}

Now if I have another part that needs this rule, I don't have to add a third rule `#idThree h1`, I can just apply the class `.heading-container` to the container element and have a regular ole h1 in it like normal.

Furthermore, I see a lot of repeated rules numerous times in a css file.

	.a { margin-top: 10px; }
	.b { margin-top: 10px; }
	.c { margin-top: 10px; }

You can consolidate all these into just:

	.singleRule { margin-top: 10px; }

Also, I see things like this where you're repeating rules because your rules diverge in different ways.

	.a { margin-top: 10px; }
	.b { margin-top: 10px; color: red; }
	.c { margin-top: 10px; color: green; }

You could make this more clean by separating concerns, margin from color.

	.info { margin-top: 10px; }
	.info-stop { color: red; }
	.info-go { color: green; }

In this way, you could then add multiple classes to an element to achieve all rules you want. E.g. `class="info info-stop"`, or `class="info info-green"`

### Special Words / Naming
Try to avoid making class names that mirror existing and often used element names. E.g. Heading 1 is `h1` so don't create a class that is `.h1`. Either just apply the rule to all `h1` or create a very special class name that you can apply to your `h1`.

### IDs as CSS Rules
While there is nothing wrong per se with using IDs as CSS rules, note that the nature of the ID is _uniqueness_. Thus, rules such as the following:

	div#someID {}

Which indicates a div with the ID of `someID` is redundant. A good way of thinking is really, CSS rules should be as generalizable as possible. If you see yourself repeating similar rules:

	div#fixedfooter.container-fluid{
	  margin-left: auto;
	  padding-bottom: auto;
	}

	div#photofooter.container-fluid{
	  margin-left: auto;
	  padding-bottom: auto;
	}

Just create a single class like: `div.adjusted-footer` and apply it to the sections that should have those style rules applied.

### Line Breaks \<br\>
In general, try to avoid using `<br>` to add space between sections. It's a _hacky_ way of doing things. Okay for demos but generally frowned upon in practice. Better to use `.classes` and **css** to accomplish the same thing.

### Bootstrap Overrides
While I'm happy that you are overriding Bootstrap - in general you will probably not want to override some of the core components of bootstrap so greatly. Things like `container`, `container-fluid`, `row`, `col-*-*` are the foundations of proper spacing on the grid and relate to each other in very specific ways. Manipulating these without really understanding the details is usually very problematic at this stage. Instead, if you want some custom padding (extra padding, margins, etc.) in your Bootstrap layout - feel free to add a `div` inside your columns to do that extra work.

In general I would probably not add too many _extra_ rules on elements that have some of these core classes, `container`, `container-fluid`, `row`, `col-*-*`, and opt for creating my content inside the columns with custom rules applied on said content within this frame.

### Nested Columns
Some of you were trying to create columns inside of columns. This is totally doable! In such a case, the pattern you want is the following:

`.container` > `.row` > `.col-*-*` > `.row` > `.col-*-*`

It would end up looking like this:

	<div class="container">
		<div class="row">
			<div class="col-md-6">
				<div class="row">
					<div class="col-md-4"></div>
					<div class="col-md-4"></div>
					<div class="col-md-4"></div>
				</div>
				<div class="row">
					<div class="col-md-4"></div>
					<div class="col-md-4"></div>
					<div class="col-md-4"></div>
				</div>
			</div>
			<div class="col-md-6">
				...
			</div>
		</div>
	</div>

This would leave us with 2 columns and in the first column, split smaller into thirds.

### Anchors
Some of you are doing something a little funky with the anchors. `<a id="someID"></a>`. This is an anchor element with the ID of `someID`. But it won't really appear on your page since there is no content to the anchor (between the opening and closing tag.) You can add IDs to any element. E.g. `<h1 id="aaa">Orange</h1>` and if you want to link to that heading, you can link like this: `<a href="#aaa">Jump to Section</a>` Notice how the href points to `#aaa` which is exactly how we'd reference an ID in CSS... with the `#` sign.

Another sort of neat thing is that anywhere on the page that you have an ID, E.g. `<h3 id="penguins">` if in your URL you add `#penguins` it will _JUMP_ to that part of the page. You've probably seen URL links that not only go to a page but jump to a part of it. Like this one: [http://getbootstrap.com/css/#buttons](http://getbootstrap.com/css/#buttons). That's what the # is doing. Essentially on the Bootstrap page, they added an id of `buttons` to the `h1` tag.

### Input Names
HTML Inputs are a little special compared to other elements. They can have an attribute called "name" to identify them from within a form. It's sort of like an ID, but imagine the following example with radio buttons.

	<input name="gender" type="radio" value="male">
	<input name="gender" type="radio" value="female">
	<input name="gender" type="radio" value="other">

Because these inputs share the same `name="gender"` they act as one input. This is what allows the HTML to turn off one of the other radio buttons when a new one is selected. Without having the name attribute, HTML won't know that they're all part of the same radio group - and you'll end up being able to click multiple ones. The `name` attribute is a little special, don't use them unless you're working with an `<input>` element.

### DIVs to Organize Content / Subcontent
Your content often has layout patterns that are used over and over again. Don't be afraid to use `divs` and `classes` to organize some of these contents and sub-contents. Example:

	<div class="col-md-4">
		<h3>Jin Kuwata<h3>
		<img src="profile1.jpg">
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
	</div>

vs.

	<div class="col-md-4">
		<div class="user-profile">
			<div class="user-header">
				<h3>Jin Kuwata<h3>
				<img src="profile1.jpg">
			</div>
			<div class="user-info">
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
			</div>
		</div>
	</div>

While this adds a few more `divs` it organizes the component into very easily accessible parts. If I want to add space between the `.user-header` and `.user-info` I can add a css `margin-bottom` to the `.user-header` rule. If I want to surround this in a border, I can target the `.user-profile` rule. This template can be used over and over again.

---
## External Resources

1. [30 CSS Selectors You Must Memorize](https://code.tutsplus.com/tutorials/the-30-css-selectors-you-must-memorize--net-16048)
2. [Codrops CSS Property Reference](http://tympanus.net/codrops/css_reference/)

## Extra Note on Javascript

### return vs. console.log()

	function x() {
		return 1;
	}
	console.log( x() + 10 ); // See breakdown below

1. x() -> returns 1
2. 1 + 10 -> returns 11
3. console.log(11) -> displays in browser console, 11

**Conversely**

	function x() {
		console.log(1);
	}
	console.log( x() + 10 ); // See breakdown below

1. x() -> displays in browser console, 1
2. x() -> does not _return_ anything to where it is called as it simply sent the data to the console. x() is NaN, not a number.
3. NaN + 10 -> returns NaN
4. console.log(NaN) -> displays in browser console, NaN
