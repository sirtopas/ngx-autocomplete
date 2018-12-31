# ngx-autocomplete
A small autocomplete pipe for use in Angular7+

https://cronus-ghost.azurewebsites.net/autocomplete-pipe-in-angular/

# Adding our Pipe
The first step is to make sure that it has been setup in our Module correctly. Head over to the app.module.ts file and add import our pipe:

`import { NgxAutocompletePipe } from './ngx-autocomplete/ngx-autocomplete.pipe';`

Once imported, we must also list it as a Declaration and Provider:

```
@NgModule({  
declarations: [    
AppComponent,    
NgxAutocompletePipe  
],
 imports: [    
BrowserModule,    
AppRoutingModule,    
FormsModule  
],  
providers: [    
NgxAutocompletePipe  
],  
bootstrap: [AppComponent]})
```

Now, our application will compile and run without issue. There is however one more step we need to do before we can see it in action and that's to wire it up!

First off, we need to add a small bit of code to our `app.component.ts`:
```
statusFilter: string;
userTestStatus: { id: number, name: string }[] = [
{ 'id': 0, 'name': 'Available' },
{ 'id': 1, 'name': 'Ready' },
{ 'id': 2, 'name': 'Started' }
];
```
This code sets up a variable called `statusFilter` which will be used our autocomplete pipe to hold the value that the user is searching for. We also setup a userTestStatus object. This is a dummy object used to hold items with an id and name so we can best demonstrate our example. Data from an API or database would work without issue here.

Next, head to your app component template (app.component.html) and add the following:
```
<input name="statusFilter" type="text" [(ngModel)]="statusFilter" autocomplete="off" />
<div *ngFor="let status of userTestStatus | ngxAutocomplete:'name':statusFilter">    {{status.name}}</div>
```
We're adding a new input here which is used to hold the model of StatusFilter. We've also set autocomplete to false so that Chrome or any other browser won't try and override our autocomplete with their own.

The div below the input is used to display our results. As you can see the pipe (|) here is donating where we add our custom pipe. Following that, we add ngxAutocomplete:'name':statusFilter" which tells the pipe that we're filtering on name and using the statusFilter filter to filter the results. Lastly, we tell the div to display {{status.name}} for each item that matches.

Save your code and watch as your autocomplete pipe comes to life.
