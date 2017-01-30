# Section 6:  Building Forms with Basic Validation

## Monday, January 30, 2017

### Introduction

**Form Types**

    1.  Template driven

        Easier to write
        Less control over validation

    2.  Model driven

        A little more code
        Full control over validation


##Showing Validation Errors##

**Validation Rules for Implicitly-Created Controls**
    
    1.  required

            Add required attribute to a form field to ensure that a value is submitted.

            <input 
                ngControl ="firstName" 
                #firstName="ngForm" 
                (change) = "log(firstName)" 
                id="firstName" 
                type="text" 
                class="form-control"
                required>
            // Display validation errors next to each input field
            // Use *ngIf to alert only if user visits field and does not
            // enter a value.
            <div class="alert alert-danger" 
                *ngIf="firstName.touched && !firstName.valid">
                First name is required. 
            </div>

    2.  minlength

    3.  maxlength

