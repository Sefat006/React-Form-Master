# Module-46: React Core Concept part-3

# {perameter}.preventDefault() = to prevent from loading

# simpleForm = {perameter}.target.name.value;
example: console.log(e.target.email.value);

# StatefulForm = individual state by using useState(null);
example: console.log(e.target.value);

* onChance{}, const [email, setEmail] = useState(null);

# HookForm = all the state at once
* make a js file name useInputState();
* in HookForm; use useInputState() instead of useState;
* StateFulForm is the basic and HookForm is the advance;
* 2 types of return is using here, object or array; use onChance and NameState for Object return

# use hook to handle states and submit and error. example: react hook form