// EventTarget Class
module.exports = class EventTarget
{
    // Register the targeted element
    constructor(targetedElement)
    {
        this.target = targetedElement;
    }

    // Return the targeted element itself
    get_target()
    {
        return this.target;
    }

    // Return all children of a parent element,
    // where parent is a dom element
    get_all_children(parent,accum = [])
    {
        let i;
        accum = accum || [];
        for(i = 0; i < parent.childNodes.length; i++)
        {
            accum.push(parent.childNodes[i])
            this.get_all_children(parent.childNodes[i], accum);
        }
        return accum;
    }

    // Return true is the targeted element is element
    is(element)
    {
        return this.target === element;
    }

    // Return the targeted element's attr attribute
    get(attr)
    {
        return this.target.getAttribute(attr);
    }

    // Return the targeted element's data-attr data attribute
    data(attr)
    {
        attr = 'data-' + attr;
        return this.target.getAttribute(attr);
    }

    // Return true if the targeted element has the classe class
    has_class(classe)
    {
        return this.target.classList.contains(classe);
    }

    // Return true if the targeted element's id is $id
    has_id(id)
    {
        return this.target.getAttribute('id') === id;
    }

    // Return the targeted element's attr attribute value
    has(attr,value)
    {
        return this.target.getAttribute(attr) === value;
    }

    // Return wether the targeted element is part of selectors,
    // where selectors is one or more css selectors, comma seperated
    is_one_of(...selectors)
    {
        let collection = [];
        let items;
        selectors.forEach(selector =>
        {
            items = document.querySelectorAll(selector);
            items.forEach(item =>
            {
                collection.push(item);
            });
        });
        return collection.includes(this.target);
    }

    // Return wether the targeted element is a parent of selector,
    // where selector is a css selector
    is_parent_of(selector)
    {
        return this.target.querySelector(selector) !== undefined && this.target.querySelector(selector) !== null;
    }

    // Return wether the targeted element is child of selector,
    // where parent can be a string css selector,
    // or a dom element
    is_child_of(selector)
    {
        if(selector === null) return false;
        let parent = selector;
        if(typeof parent === 'string')
        {
            parent = document.querySelector(selector);
            if(!parent) return false;
        }
        let children = this.get_all_children(parent);
        return children.includes(this.target);
    }

    // Return the first targeted element's parent that matches selector,
    // where selector is a css selector
    get_parent(selector)
    {
        let parent = this.target;
        while(!parent.matches(selector))
        {
            parent = parent.parentElement;
        }
        return parent;
    }

    // Return the first targeted element's child that matches selector,
    // where selector is a css selector
    get_child(selector)
    {
        return this.target.querySelector(selector);
    }
}