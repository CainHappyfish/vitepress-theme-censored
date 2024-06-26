import {
  __commonJS
} from "./chunk-BUSYA2B4.js";

// ../../../../node_modules/types/lib/types/hash.js
var require_hash = __commonJS({
  "../../../../node_modules/types/lib/types/hash.js"(exports, module) {
    "use strict";
    function key_idx(self, key) {
      return self.__hash_keys__.indexOf(key);
    }
    var Hash = module.exports = function Hash2(defaultValue) {
      this.__hash_index__ = 0;
      this.__hash_keys__ = [];
      this.__hash_vals__ = [];
      this.__default_value__ = "function" === typeof defaultValue ? defaultValue : function() {
        return defaultValue;
      };
      this.__count__ = 0;
    };
    Hash.prototype.store = function store(key, val) {
      var i = this.__hash_keys__.indexOf(key);
      if (0 <= i) {
        this.__hash_vals__[i] = val;
        return;
      }
      i = this.__hash_index__;
      this.__hash_index__ += 1;
      this.__count__ += 1;
      this.__hash_keys__[i] = key;
      this.__hash_vals__[i] = val;
      return val;
    };
    Hash.prototype.set = Hash.prototype.store;
    Hash.prototype.remove = function remove(key) {
      var i = key_idx(this, key), val = this.__hash_vals__[i];
      if (0 <= i) {
        delete this.__hash_keys__[i];
        delete this.__hash_vals__[i];
        this.__count__ -= 1;
      }
      return val;
    };
    Hash.prototype.hasKey = function hasKey(key) {
      return 0 <= key_idx(this, key);
    };
    Hash.prototype.retrieve = function retrieve(key) {
      var i = key_idx(this, key);
      return 0 <= i ? this.__hash_vals__[i] : this.__default_value__(this, key);
    };
    Hash.prototype.get = Hash.prototype.retrieve;
    Hash.prototype.isEmpty = function isEmpty() {
      return 0 === this.__count__;
    };
    Hash.prototype.__defineGetter__("count", function count() {
      return this.__count__;
    });
    Hash.prototype.__defineGetter__("keys", function keys() {
      return this.__hash_keys__.slice();
    });
    Hash.prototype.clone = function() {
      var copy = new Hash(this.__default_value__);
      this.__hash_keys__.forEach(function(k) {
        if (this.hasKey(k)) {
          copy.set(k, this.get(k));
        }
      }, this);
      return copy;
    };
    Hash.create = function create(defaultValue) {
      return new Hash(defaultValue);
    };
  }
});

// ../../../../node_modules/types/lib/types/set.js
var require_set = __commonJS({
  "../../../../node_modules/types/lib/types/set.js"(exports, module) {
    "use strict";
    function Set(arr) {
      Object.defineProperty(this, "__arr__", { value: [] });
      if (arr) {
        arr.forEach(function(el) {
          this.push(el);
        }, this);
      }
    }
    Set.prototype.unshift = function(val) {
      if (-1 === this.__arr__.indexOf(val)) {
        this.__arr__.unshift(val);
      }
    };
    Set.prototype.push = function(val) {
      if (-1 === this.__arr__.indexOf(val)) {
        this.__arr__.push(val);
      }
    };
    ["forEach", "slice", "join", "shift", "pop"].forEach(function(name) {
      Set.prototype[name] = function() {
        return this.__arr__[name].apply(this.__arr__, arguments);
      };
    });
    Object.defineProperty(Set.prototype, "length", {
      get: function() {
        return this.__arr__.length;
      }
    });
    Set.prototype.toArray = function() {
      return this.slice();
    };
    module.exports = Set;
  }
});

// ../../../../node_modules/types/lib/types/sorted_list.js
var require_sorted_list = __commonJS({
  "../../../../node_modules/types/lib/types/sorted_list.js"(exports, module) {
    "use strict";
    function sort_nums_asc(a, b) {
      return a - b;
    }
    function get_sequence(self, weight) {
      if (void 0 === self.__sequences__[weight]) {
        self.__sequences__[weight] = [];
      }
      return self.__sequences__[weight];
    }
    var SortedList = module.exports = function SortedList2() {
      this.__sequences__ = {};
      this.__sorted__ = null;
    };
    SortedList.prototype.add = function add(weight, val) {
      this.__sorted__ = null;
      get_sequence(this, +weight).push(val);
      return this;
    };
    SortedList.prototype.__defineGetter__("sorted", function sorted() {
      var arr = [], self = this;
      if (null !== this.__sorted__) {
        return this.__sorted__;
      }
      function iterator(weight) {
        get_sequence(self, weight).forEach(function(val) {
          arr.push(val);
        });
      }
      Object.getOwnPropertyNames(this.__sequences__).sort(sort_nums_asc).forEach(iterator);
      this.__sorted__ = arr;
      return arr;
    });
    SortedList.prototype.concat = function concat(other) {
      var result = SortedList.create(), store = result.__sequences__;
      [this, other].forEach(function(set) {
        Object.getOwnPropertyNames(set.__sequences__).forEach(function(prio) {
          store[prio] = (store[prio] || []).concat(set.__sequences__[prio]);
        });
      });
      return result;
    };
    SortedList.create = function create() {
      return new SortedList();
    };
  }
});

// ../../../../node_modules/types/lib/types.js
var require_types = __commonJS({
  "../../../../node_modules/types/lib/types.js"(exports, module) {
    "use strict";
    module.exports = {
      Hash: require_hash(),
      Set: require_set(),
      SortedList: require_sorted_list()
    };
  }
});

// ../../../../node_modules/types/index.js
var require_types2 = __commonJS({
  "../../../../node_modules/types/index.js"(exports, module) {
    module.exports = require_types();
  }
});
export default require_types2();
//# sourceMappingURL=types.js.map
