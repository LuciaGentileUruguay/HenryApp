const { Sequelize, Op, Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('staff', {
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        is: {
          args: ["^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$"],
          msg: 'Campo name - Debe ser una palabra'
        }
      }
    },
    lastName: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          is: {
            args: ["^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$"],
            msg: 'Campo apellido - Debe ser una palabra'
          }
        }
      },

    birthday: {
        type: DataTypes.DATE,
        allowNull: true,
    },

    state: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    city: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  
    country: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        },
      },

    gmail: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: true,
    },

    gitHub: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: true,
    },

    password: {
      type: DataTypes.STRING,
      allowNull: true,
      // validate: {
      //   is: {
      //     args: ["[A-Za-z][A-Za-z0-9]*[0-9][A-Za-z0-9]"],
      //     msg: 'Campo password - Debe ser un conjuto de caracteres, donde cada uno consiste de una letra mayúscula o minúscula, o un dígito. La contraseña debe empezar con una letra y contener al menor un dígito'
      //   }
      // }
    },

    profile: {
      type: DataTypes.ENUM,
      values: ["instructor", "founder", "henryStaff"],
      defaultValue: "henryStaff"
    },
    
    rol: {
      type: DataTypes.ENUM,
      values: ["admin1", "admin2"],
      defaultValue: "admin1"
    },

    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false
    },

    urlImage: {
      type: DataTypes.STRING,
      defaultValue: true
    },
    
    portadaImage: {
      type: DataTypes.STRING
    }


    //hashea password antes de crearla
    /*usuario.addHook('beforeCreate', (s) => {
      s.password = bcrypt.hashSync(s.password, bcrypt.genSaltSync(8), null);
    });*/
  })
}
