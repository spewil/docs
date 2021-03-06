---
id: writing_docs
title: Writing Documentation
---

## How to develop a doc page

All documentation is composed in [GitHub-flavored Markdown syntax](https://github.github.com/gfm/) which makes it very easy to contribute!

There are a few ways to contribute documentation:

1. If your change is just a typo or additional text, just use the `Edit this page` button at the bottom of each page to edit on GitHub. Submit a pull request for your change.
2. If your change requires a new documentation page, you can use the `add file` button on GitHub to add your new markdown text. ''follow the instructions to edit on your local machine and submit a pull request.
3. If your new page requires more than just text (e.g. images), you'll need to clone the repository, make a branch, make changes, and submit a pull request so your documentation draft can be reviewed and merged into the documentation.

Please see the [GitHub repo](https://github.com/spewil/bonsai-rx-docs) for more instructions, and don't hesitate to reach out on [Gitter](https://gitter.im/bonsai-docs/community) for questions. We'd love to have your contribution!

## How to start working locally using `yarn`

- Install `yarn` on your system
- Go to the [docs repo](https://github.com/spewil/bonsai-rx-docs)
- `git clone` the repo and make a new feature branch for your contributions
- Inside the folder, run `yarn`, this will install packages
- Run `yarn start` to build and serve the site, this should open a local development server
- You can now make changes to files in `docs` and the site should update
- If you want to add a new page, you must add it to the `sidebars.js` file, for more information see [here](https://v2.docusaurus.io/docs/sidebar/)
- If you want to embed an image in a doc, save it as an `.svg` file in an `Images` folder inside the same directory as the respective doc. To save your workflow as `.svg` use `Ctrl + Shift + E`
- When you're finished editing or ready to show off your new contribution, fork the repo, push your branch to the forked repo, and submit a pull request for your branch on GitHub with an explanation of your changes; for more information about this process, see the `Public Forked Project` section [here](https://git-scm.com/book/en/v2/Distributed-Git-Contributing-to-a-Project)

## Documentation Style Guide & Features

- Each page not in `Tutorials` should reflect the use of a single node or a handful of nodes
- The filename of a doc page should be identical to its `id` in the markdown header
- Match the formatting you see in the rest of the project as much as possible, but don't be afraid to get creative
- **Please read through the following cheat sheet to best use the available markdown tools!**

## Markdown Cheatsheet

You can write content using

### Headers

# H1 - Create the best documentation

## H2 - Create the best documentation

### H3 - Create the best documentation

#### H4 - Create the best documentation

##### H5 - Create the best documentation

###### H6 - Create the best documentation

---

### Emphasis

Emphasis, aka italics, with *asterisks* or _underscores_.

Strong emphasis, aka bold, with **asterisks** or __underscores__.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~

---

### Lists

1. First ordered list item
1. Another item
   - Unordered sub-list.
1. Actual numbers don't matter, just that it's a number
   1. Ordered sub-list
1. And another item.

* Unordered list can use asterisks

- Or minuses

+ Or pluses

---

### Links

[I'm an inline-style link](https://www.google.com/)

[I'm an inline-style link with title](https://www.google.com/ "Google's Homepage")

[I'm a reference-style link][arbitrary case-insensitive reference text]

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself].

URLs and URLs in angle brackets will automatically get turned into links. http://www.example.com/ or <http://www.example.com/> and sometimes example.com (but not on GitHub, for example).

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.mozilla.org/
[1]: http://slashdot.org/
[link text itself]: http://www.reddit.com/

---

### Internal links

This is a link to [another document.](../fundamentals/video/camera_capture/) This is a link to an [external page.](http://www.example.com/)

---

### Images

Here's our logo (hover to see the title text):

Inline-style: ![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png 'Logo Title Text 1')

Reference-style: ![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png 'Logo Title Text 2'

Images from any folder can be used by providing path to file. Path should be relative to markdown file.

![img](../images/bonsai.svg)

---

### Code

```javascript
var s = 'JavaScript syntax highlighting';
alert(s);
```

```python
s = "Python syntax highlighting"
print(s)
```

```
No language indicated, so no syntax highlighting.
But let's throw in a <b>tag</b>.
```

```js {2}
function highlightMe() {
  console.log('This line can be highlighted!');
}
```

---

### Tables

Colons can be used to align columns.

| Tables        |      Are      |   Cool |
| ------------- | :-----------: | -----: |
| col 3 is      | right-aligned | \$1600 |
| col 2 is      |   centered    |   \$12 |
| zebra stripes |   are neat    |    \$1 |

There must be at least 3 dashes separating each header cell. The outer pipes (|) are optional, and you don't need to make the raw Markdown line up prettily. You can also use inline Markdown.

| Markdown | Less      | Pretty     |
| -------- | --------- | ---------- |
| _Still_  | `renders` | **nicely** |
| 1        | 2         | 3          |

---

### Blockquotes

> Blockquotes are very handy in email to emulate reply text. This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can _put_ **Markdown** into a blockquote.

---

### Inline HTML

<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>

---

### Line Breaks

Here's a line for us to start with.

This line is separated from the one above by two newlines, so it will be a _separate paragraph_.

This line is also a separate paragraph, but... This line is only separated by a single newline, so it's a separate line in the _same paragraph_.

---

### Admonitions

:::note

This is a note

:::

:::tip

This is a tip

:::

:::important

This is important

:::

:::caution

This is a caution

:::

:::warning

This is a warning

:::


### Javascript

You can write JSX and use React components within your Markdown thanks to [MDX](https://mdxjs.com/).

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>{children}</span> );

<Highlight color="#25c2a0">Docusaurus green</Highlight> and <Highlight color="#1877F2">Facebook blue</Highlight> are my favorite colors.

I can write **Markdown** alongside my _JSX_!