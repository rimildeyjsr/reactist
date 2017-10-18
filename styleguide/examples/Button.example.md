### Standard Buttons
```jsx
<section className='styleguide __buttons'>
    <Button name='Primary Button' />
    <Button white name='White Button'/>
    <Button secondary name='Secondary Button' />
    <Button danger name='Danger Button!'/>
</section>
```

### Small Buttons
```jsx
<section className='styleguide __buttons'>
    <Button small name='Small Primary Button' />
    <Button small white name='Small White Button'/>
    <Button small secondary name='Small Secondary Button' />
    <Button small danger name='Small Danger Button!'/>
</section>
```

### Disabled Buttons
```jsx
<section className='styleguide __buttons'>
    <Button disabled name='Disabled Primary Button' />
    <Button disabled white name='Disabled White Button'/>
    <Button disabled secondary name='Disabled Secondary Button' />
    <Button disabled danger name='Disabled Danger Button!'/>
</section>
```

### Loading Buttons
```jsx
<section className='styleguide __buttons'>
    <Button loading name='Loading Primary Button' />
    <Button loading white name='Loading White Button'/>
    <Button loading secondary name='Loading Secondary Button' />
    <Button loading danger name='Loading Danger Button!'/>
</section>
```

#### Alternate Branding

If you want your buttons to have a different color scheme you need to import a `.css` file and overwrite the following rules:

```less
@primary-color: #dd4b39;
@primary-color-lighter: lighten(@primary-color, 10%);
@primary-color-darker: darken(@primary-color, 10%);

.alternate_branding {
    // alternate button styles
    & > .reactist.button {
        background-color: @primary-color;

        &:not(.loading):not(.secondary):not(.white):not(.danger):not([disabled]):hover {
            background-color: @primary-color-darker;
        }

        &:not(.loading):not(.secondary)&:disabled {
            background-color: @primary-color-lighter;
        }

        &.white {
            background-color: white;
            border: 1px solid  @primary-color;
            color: @primary-color;
        }
    }
}
```

```jsx
<section className='styleguide __buttons alternate_branding'>
    <Button name='Primary Button' />
    <Button white name='White Button'/>
    <Button secondary name='Secondary Button' />
</section>
```
