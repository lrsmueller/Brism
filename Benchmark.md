# Comparing of CodeBlock Code Update Javascript Rendering and Page Rendering Times.

- JSCallback: The stop call was invoked from `StopTimer` call in Javascript.
- BlazorLF: the load time (Init -> AfterRender) or Update time (Update -> AfterRender) was measured
- IntKey means that the @key was set to a simple integer and not to the whole code.  

- **I ran this Benchmark only once on a debug Build**

### Results 
  - @key is more consitent
  - shorter @key is faster 

### Times
| Benchmark                     | Initial Load BlazorLF | Initial Load JSCallback | Reload 1 BlazorLF | Reload 1 JSCallback | Update 2 Big BlazorLF | Update 2 Big JSCallback | Update 2 Small BlazorLF | Update 2 Small JSCallback | Loaded Circuit BlazorLF | Loaded Circuit JSCallback | Updated 2 Big BlazorLF | Updated 2 Big JSCallback | Update 2 Small 2 BlazorLF | Update 2 Small 2 JSCallback | Reload 2 BlazorLF | Reload 2 JSCallback |
|------------------------------|------------------------|--------------------------|-------------------|---------------------|------------------------|--------------------------|--------------------------|----------------------------|--------------------------|----------------------------|---------------------------|-----------------------------|-----------------------------|-----------------------------|-------------------|---------------------|
| CodeBlockJSBenchmark         | 105124                 | 530474                   | 69121             | 358368              | 69121                  | 530879                   | 69121                    | 646408                    | 173451                   | 224137                     | 173451                    | 364007                      | 173451                      | 438759                      | 52983             | 574083              |
| CodeBlockKeyBenchmark        | 108901                 | 240213                   | 75514             | 240069              | 148076                 | 105178                   | 306403                   | 188027                    | 162638                   | 184203                     | 214293                    | 98743                       | 325831                      | 144893                      | 76813             | 216879              |
| CodeBlockKeyBenchmarkIntKey  | 104417                 | 213860                   | 84896             | 157521              | 144173                 | 111143                   | 184763                   | 71723                     | 213736                   | 256616                     | 281285                    | 107677                      | 396390                      | 143914                      | 74206             | 190765              |


